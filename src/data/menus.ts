export type menu={
    menu_Id: number,
    menu_Name: string,
    menu_HasSubmenu: Boolean
}
export const navBarMenus: menu[]=[
    {
        menu_Id:1,
        menu_Name: 'Men',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:2,
        menu_Name: 'Women',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:3,
        menu_Name: 'Kids',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:4,
        menu_Name: 'Home',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:5,
        menu_Name: 'Beauty',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:6,
        menu_Name: 'Genz',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:7,
        menu_Name: 'Studio',
        menu_HasSubmenu: false,
    }
]
export const topBarMenus: menu[]=[
    {
        menu_Id:1,
        menu_Name: 'SignIn',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:2,
        menu_Name: 'Faq',
        menu_HasSubmenu: false,
    },
    {
        menu_Id:3,
        menu_Name: 'Currency',
        menu_HasSubmenu: false,
    },

]