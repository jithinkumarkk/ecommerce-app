import NavBar from "./NavBar";
import { useMenu } from "@/context/MenuContext";
 
export default function Header(){
    const { navBarMenuItems, topBarMenuItems } = useMenu();
    return(
       <>
        <div className="topBar">
            <ul className="topbar-menus flex flex-row w-11/12 px-5 mr-auto ml-auto gap-[30]">
                <li className="flex-1">Free shipping, 30-day return or refund guarantee.</li>     
                {topBarMenuItems.map((menu) => (
                    <li key={menu.menu_Id}>
                    {menu.menu_Name}
                    </li>
                ))}
            </ul>    
        </div>
        <NavBar menuItems={navBarMenuItems} />
       </>
    )
}