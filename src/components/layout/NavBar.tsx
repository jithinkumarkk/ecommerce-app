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
        <span id="cart-account" className="inline-flex"> <AppIcon name="mdi:account" /></span>
        <span id="cart-wish" className="inline-flex"> <AppIcon name="lucide:heart" /> </span>
        <span id="cart-icon" className="inline-flex"> <AppIcon name="lucide:shopping-bag" />  </span>
      </div>
    </div>
  );
}
