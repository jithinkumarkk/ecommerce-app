
import type { menu,SubMenu } from "@/data/appData";

type menuProps = {
    menuItems: menu[];
};
type subMenuProps = {
    subMenus?: SubMenu[];
};  

 
function RenderSubMenu({ subMenus = [] }: subMenuProps) {
  // Approximate number of menu rows per column
  const maxItemsPerColumn = 16;

  // Count items + space needed for category headings
  const totalItems = subMenus.reduce(
    (total, subMenu) =>
      total + (subMenu.items?.length ?? 0) + 2,
    0
  );

  // Automatically decide how many columns are needed
  const columnCount = Math.min(
    subMenus.length,
    Math.max(1, Math.ceil(totalItems / maxItemsPerColumn))
  );

  const columns = Array.from({ length: columnCount }, () => ({
    menus: [] as SubMenu[],
    totalItems: 0,
  }));

  // Larger sections first for better balancing
  const sortedMenus = [...subMenus].sort(
    (a, b) => (b.items?.length ?? 0) - (a.items?.length ?? 0)
  );

  sortedMenus.forEach((subMenu) => {
    const shortestColumn = columns.reduce((a, b) =>
      a.totalItems <= b.totalItems ? a : b
    );

    shortestColumn.menus.push(subMenu);
    shortestColumn.totalItems +=
      (subMenu.items?.length ?? 0) + 2;
  });

  return (
    <>
      {columns.map((column, index) => (
        <li
          key={index}
          className="w-[220px] shrink-0 p-4 odd:bg-white even:bg-gray-50"
        >
          {column.menus.map((subMenu) => (
            <div key={subMenu.subMenu_Id} className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-rose-800">
                {subMenu.subMenu_Name}
              </h3>

              <ul className="space-y-1">
                {subMenu.items?.map((item) => (
                  <li
                    key={item.item_Id}
                    className="cursor-pointer text-sm text-gray-600 hover:font-semibold hover:text-black"
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
            <li className="megamenu group z-10 py-[20] hover:cursor-pointer"  key={`${menu.menu_Id}-${menu.menu_Name}`}>
              <span>{menu.menu_Name}</span> 
              {(menu.menu_HasSubmenu) &&
                 (
                  <ul className="megamenu-dropdown absolute left-0 top-full z-50 hidden w-max max-w-[90vw]  overflow-x-auto bg-white shadow-xl group-hover:flex">
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
        <ul className="relative flex flex-row gap-0 w-10/12 flex-1 justify-around self-center ">
          <RenderMainMenu menuItems={menuItems} />
        </ul>
     );
}