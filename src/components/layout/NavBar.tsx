import { SearchBox } from "./searchbox";
import type { menu } from "@/data/appData";

type NavBarProps = {
  menuItems: menu[];
};
export default function NavBar({ menuItems }: NavBarProps) {
  
  return (
    <div className="NavBar">
      <div className="flex flex-row w-11/12 px-5 mr-auto ml-auto gap-[30] justify-between items-center">
        <div className="logo">
          <img
            className="cropped-image"
            src="https://preview.themewagon.com/malefashion/img/logo.png"
          />
        </div>
        <ul className="flex flex-row gap-[20] flex-1 justify-between self-center">
          {menuItems.map((menu) => (
            <li  className={menu.menu_HasSubmenu ? 'py-[30] has-submenu':'py-[30] ' } key={`${menu.menu_Id}-${menu.menu_Name}`}>{menu.menu_Name}
              {
                (menu.menu_HasSubmenu) &&(
                  <ul className="submenu flex-col">
                    {
                      menu.subMenu?.map((subMenu)=>(<li key={subMenu.subMenu_Id} className="aligntext-center">{subMenu.subMenu_Name}</li>)) 
                    }
                  </ul>
                )  
              }
            </li>

          ))}
        </ul>
        <SearchBox className="flex-1 w-full"/>
      </div>
    </div>
  );
}
