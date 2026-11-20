"use client";

import { useEffect, useRef } from "react";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

type WatchOptions = {
  deep?: boolean;
  immediate?: boolean;
};

function safeClone<T>(value: T): T {
  try {
    return cloneDeep({ value }).value;
  } catch {
    return value;
  }
}

export function useWatch<T>(
  value: T,
  callback: (newVal: T, oldVal: T) => void,
  options: WatchOptions = {}
) {
  const { deep = true, immediate = true } = options;

  const previous = useRef<{
    value: T;
    snapshot: T;
  } | null>(null);

  useEffect(() => {
    // First execution
    if (previous.current === null) {
      previous.current = {
        value,
        snapshot: safeClone(value),
      };

      if (immediate) callback(value, value);

      return;
    }

    // Compare previous and current values
    const changed = deep
      ? !isEqual(previous.current.snapshot, value)
      : !Object.is(previous.current.value, value);

    if (changed) {
      const oldVal = previous.current.snapshot;

      previous.current = {
        value,
        snapshot: safeClone(value),
      };

      callback(value, oldVal);
    }
  });
}