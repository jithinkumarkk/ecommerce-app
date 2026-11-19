import type { menu } from "@/data/menu";
import { MegaMenu } from "./MegaMenu";
import { SearchBox } from "./SearchBox";
import { Logo } from "./logo";
import AppIcon from "../ui/AppIcon";
type NavBarProps = {
  menuItems: menu[];
};

export default function NavBar({ menuItems }: NavBarProps) {
    
  return (
    <div className="NavBar">
      <div className="relative flex flex-row w-11/12 px-5 mr-auto ml-auto gap-[30] justify-between items-center">
        <Logo/>
        <MegaMenu menuItems={menuItems} />
        <SearchBox className="flex-1 w-full"/>
        <AppIcon name="mdi:account" />
        <AppIcon name="lucide:heart" />
        <AppIcon name="lucide:shopping-cart" />
      </div>
    </div>
  );
}
