export type SubMenu = {
    subMenu_Id: number;
    subMenu_Name: string;
    subMenu_Path?: string;
};
export type menu = {
    menu_Id: number,
    menu_Name: string,
    menu_HasSubmenu: Boolean,
    subMenu?: SubMenu[];
}
export const navBarMenus: menu[] = [
    {
        menu_Id: 1,
        menu_Name: 'Men',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 2,
        menu_Name: 'Women',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 3,
        menu_Name: 'Kids',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 4,
        menu_Name: 'Home',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 5,
        menu_Name: 'Beauty',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 6,
        menu_Name: 'Genz',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 7,
        menu_Name: 'Studio',
        menu_HasSubmenu: false,
    }
]
export const topBarMenus: menu[] = [
    {
        menu_Id: 1,
        menu_Name: 'SignIn',
        menu_HasSubmenu: false,
    },
    {
        menu_Id: 2,
        menu_Name: 'Faq',
        menu_HasSubmenu: false
    },
    {
        menu_Id: 3,
        menu_Name: 'Currency',
        menu_HasSubmenu: true,
        subMenu: [
            {
                subMenu_Id: 1,
                subMenu_Name: "USD",
            },
            {
                subMenu_Id: 2,
                subMenu_Name: "INR"
            },
            {
                subMenu_Id: 3,
                subMenu_Name: "CAD"
            },

            {
                subMenu_Id: 4,
                subMenu_Name: "EUR"
            },
        ],
    },

]
 

export const carousel = [
    {
      id:1,  
      title: "Season End Fashion Sale",
      subtitle: "Up to 50% off on new arrivals",
      ctaText: "Shop Now",
      ctaUrl: "#fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
        
      id:2,
      title: "Next-Gen Audio & Tech",
      subtitle: "Studio-grade wireless headphones",
      ctaText: "Explore Gadgets",
      ctaUrl: "#tech",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
        
      id:3,
      title: "Minimalist Home Living",
      subtitle: "Modern furniture for warm spaces",
      ctaText: "View Lookbook",
      ctaUrl: "#home",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];
  