
import type { menu,SubMenu } from "@/data/appData";

type menuProps = {
    menuItems: menu[];
};
type subMenuProps = {
    subMenus?: SubMenu[];
};  

 
 
 

function RenderSubMenu({ subMenus = [] }: subMenuProps) {
  // Create 5 columns
  const columns = Array.from({ length: 4 }, () => ({
    menus: [] as SubMenu[],
    totalItems: 0,
  }));

  // Arrange larger sections first
  const sortedMenus = [...subMenus].sort(
    (a, b) =>
      (b.items?.length ?? 0) - (a.items?.length ?? 0)
  );

  // Add each section to the shortest column
  sortedMenus.forEach((subMenu) => {
    const shortestColumn = columns.reduce((a, b) =>
      a.totalItems <= b.totalItems ? a : b
    );

    shortestColumn.menus.push(subMenu);

    shortestColumn.totalItems +=
      (subMenu.items?.length ?? 0) + 1;
  });

  return (
    <>
      {columns.map((column, index) => (
        <li
          key={index}
          className="flex min-w-0 flex-1 flex-col gap-4 p-4 odd:bg-white even:bg-gray-50  hover:cursor-pointer" 
        >
          {column.menus.map((subMenu) => (
            <div key={subMenu.subMenu_Id}>
              <h3 className="mb-3 text-sm font-semibold text-pink-500 hover:font-bold">
                {subMenu.subMenu_Name}
              </h3>

              <ul className="space-y-2">
                {subMenu.items?.map((item) => (
                  <li
                    key={item.item_Id}
                    className="text-sm text-gray-600 hover:text-black hover:font-semibold hover:cursor-pointer"
                  >
                    {item.item_Name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      ))}
    </>
  );
}


function RenderMainMenu({ menuItems }: menuProps) {
    return(
       <>
        {menuItems.map((menu) => (
            <li className="group z-10 py-[30] hover:cursor-pointer"  key={`${menu.menu_Id}-${menu.menu_Name}`}>
              <span>{menu.menu_Name}</span> 
              {(menu.menu_HasSubmenu) &&
                 (
                  <ul className="absolute mx-auto top-full z-50 hidden left-[10%] w-[70%] items-stretch bg-white shadow-xl group-hover:flex">
                     <RenderSubMenu subMenus={menu.subMenu}/> 
                  </ul>
                 ) 
              }
            </li>
          ))}
       </>
    )
}  


export function MegaMenu({ menuItems }: menuProps) {
    return(
        <ul className="flex flex-row gap-[20] flex-1 justify-between self-center ">
          <RenderMainMenu menuItems={menuItems} />
        </ul>
     );
}