"use client";

import { createContext, useContext, type ReactNode } from "react";
import { navBarMenus, topBarMenus  } from "@/data/menus";

const MenuContext = createContext({ navBarMenuItems: navBarMenus,topBarMenuItems:topBarMenus });

export function MenuProvider({ children }: { children: ReactNode }) {
  return (
    <MenuContext.Provider value={{ navBarMenuItems: navBarMenus,topBarMenuItems:topBarMenus }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);