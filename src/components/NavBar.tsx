import { SearchBox } from "./searchbox";
import type { menu } from "@/data/menus";

type NavBarProps = {
  menuItems: menu[];
};
export default function NavBar({ menuItems }: NavBarProps) {
  
  return (
    <div className="NavBar">
      <div className="flex flex-row w-11/12 px-5 mr-auto ml-auto gap-[30] justify-between p-[30] items-center">
        <div className="logo">
          <img
            className="cropped-image"
            src="https://preview.themewagon.com/malefashion/img/logo.png"
          />
        </div>
        <ul className="flex flex-row gap-[20] flex-1 justify-between self-center">
          {menuItems.map((menu) => (
            <li key={`${menu.menu_Id}-${menu.menu_Name}`}>{menu.menu_Name}</li>
          ))}
        </ul>
        <SearchBox className="flex-1 w-full"/>
      </div>
    </div>
  );
}
