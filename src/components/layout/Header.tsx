"use client";
import NavBar from "./NavBar";
import { useMenu } from "@/context/MenuContext";
 
export default function Header(){
    const { navBarMenuItems, topBarMenuItems } = useMenu();
    return(
       <>
        <div className="topBar">
            <ul className="topbar-menus flex flex-row w-11/12 px-5 mr-auto ml-auto gap-[30] text-sm">
                <li className="flex-1">Free shipping, 30-day return or refund guarantee.</li>     
                {topBarMenuItems.map((menu) => (
                    <li className={ menu.subMenu ? 'has-submenu':'' } key={menu.menu_Id}> {menu.menu_Name}
                        {(menu.subMenu)&&(
                            <ul className="submenu flex-col">
                                { 
                                menu.subMenu?.map((subMenu)=>(
                                    <li className="text-center p-1" key={subMenu.subMenu_Id}> 
                                        {subMenu.subMenu_Name}
                                    </li>
                               ))}
                            </ul>    
                        )}
                    </li>
                ))}
            </ul>    
        </div>
        <NavBar menuItems={navBarMenuItems} />
       </>
    )
}