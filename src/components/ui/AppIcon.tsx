"use client";
import { Icon } from "@iconify/react";
type IconProps = {
  name: string;
  className?: string;
};

export default function AppIcon({ name, className = "w-6 h-6" }: IconProps) {
  return <Icon icon={name} className={className} />;
}
