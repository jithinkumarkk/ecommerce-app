 
 export type MenuItem = { /*infinte menus under second menu....n menu  */
    item_Id: number;
    item_Name: string;
    item_Path?: string;
    items?: MenuItem[]; 
  };
  
  export type SubMenu = {/* secondmenu */
    subMenu_Id: number;
    subMenu_Name: string;
    subMenu_Path?: string;
    items?: MenuItem[];
    subMenu?: SubMenu[];
  };
  
  export type menu = { /* firstmenu */
    menu_Id: number;
    menu_Name: string;
    menu_HasSubmenu: boolean;
    subMenu?: SubMenu[];
  };

  export const navBarMenus: menu[] = [
    // ================= MEN =================
    {
      menu_Id: 1,
      menu_Name: "Men",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Topwear",
          subMenu_Path: "/men/topwear",
          items: [
            {
              item_Id: 1,
              item_Name: "T-Shirts",
              item_Path: "/men/t-shirts",
              items: [
                {
                  item_Id: 1,
                  item_Name: "Polo T-Shirts",
                  item_Path: "/men/polo-t-shirts",
                },
                {
                  item_Id: 2,
                  item_Name: "Oversized T-Shirts",
                  item_Path: "/men/oversized-t-shirts",
                },
              ],
            },
            { item_Id: 2, item_Name: "Casual Shirts", item_Path: "/men/casual-shirts" },
            { item_Id: 3, item_Name: "Formal Shirts", item_Path: "/men/formal-shirts" },
            { item_Id: 4, item_Name: "Sweatshirts", item_Path: "/men/sweatshirts" },
            { item_Id: 5, item_Name: "Sweaters", item_Path: "/men/sweaters" },
            { item_Id: 6, item_Name: "Jackets", item_Path: "/men/jackets" },
            { item_Id: 7, item_Name: "Blazers & Coats", item_Path: "/men/blazers-coats" },
            { item_Id: 8, item_Name: "Suits", item_Path: "/men/suits" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Indian & Festive Wear",
          subMenu_Path: "/men/indian-festive-wear",
          items: [
            { item_Id: 1, item_Name: "Kurtas", item_Path: "/men/kurtas" },
            { item_Id: 2, item_Name: "Sherwanis", item_Path: "/men/sherwanis" },
            { item_Id: 3, item_Name: "Nehru Jackets", item_Path: "/men/nehru-jackets" },
            { item_Id: 4, item_Name: "Dhotis", item_Path: "/men/dhotis" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Bottomwear",
          subMenu_Path: "/men/bottomwear",
          items: [
            { item_Id: 1, item_Name: "Jeans", item_Path: "/men/jeans" },
            { item_Id: 2, item_Name: "Trousers", item_Path: "/men/trousers" },
            { item_Id: 3, item_Name: "Shorts", item_Path: "/men/shorts" },
            { item_Id: 4, item_Name: "Track Pants", item_Path: "/men/track-pants" },
            { item_Id: 5, item_Name: "Joggers", item_Path: "/men/joggers" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Innerwear & Sleepwear",
          subMenu_Path: "/men/innerwear-sleepwear",
          items: [
            { item_Id: 1, item_Name: "Briefs", item_Path: "/men/briefs" },
            { item_Id: 2, item_Name: "Boxers", item_Path: "/men/boxers" },
            { item_Id: 3, item_Name: "Vests", item_Path: "/men/vests" },
            { item_Id: 4, item_Name: "Sleepwear", item_Path: "/men/sleepwear" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Footwear",
          subMenu_Path: "/men/footwear",
          items: [
            { item_Id: 1, item_Name: "Casual Shoes", item_Path: "/men/casual-shoes" },
            { item_Id: 2, item_Name: "Sports Shoes", item_Path: "/men/sports-shoes" },
            { item_Id: 3, item_Name: "Formal Shoes", item_Path: "/men/formal-shoes" },
            { item_Id: 4, item_Name: "Sneakers", item_Path: "/men/sneakers" },
            { item_Id: 5, item_Name: "Sandals", item_Path: "/men/sandals" },
            { item_Id: 6, item_Name: "Flip Flops", item_Path: "/men/flip-flops" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "Sports & Active Wear",
          subMenu_Path: "/men/sports-activewear",
          items: [
            { item_Id: 1, item_Name: "Active T-Shirts", item_Path: "/men/active-t-shirts" },
            { item_Id: 2, item_Name: "Tracksuits", item_Path: "/men/tracksuits" },
            { item_Id: 3, item_Name: "Track Pants", item_Path: "/men/sports-track-pants" },
            { item_Id: 4, item_Name: "Swimwear", item_Path: "/men/swimwear" },
          ],
        },
        {
          subMenu_Id: 7,
          subMenu_Name: "Fashion Accessories",
          subMenu_Path: "/men/accessories",
          items: [
            { item_Id: 1, item_Name: "Wallets", item_Path: "/men/wallets" },
            { item_Id: 2, item_Name: "Belts", item_Path: "/men/belts" },
            { item_Id: 3, item_Name: "Watches", item_Path: "/men/watches" },
            { item_Id: 4, item_Name: "Caps", item_Path: "/men/caps" },
            { item_Id: 5, item_Name: "Sunglasses", item_Path: "/men/sunglasses" },
          ],
        },
        {
          subMenu_Id: 8,
          subMenu_Name: "Gadgets",
          subMenu_Path: "/men/gadgets",
          items: [
            { item_Id: 1, item_Name: "Smart Watches", item_Path: "/men/smart-watches" },
            { item_Id: 2, item_Name: "Headphones", item_Path: "/men/headphones" },
            { item_Id: 3, item_Name: "Speakers", item_Path: "/men/speakers" },
          ],
        },
      ],
    },
  
    // ================= WOMEN =================
    {
      menu_Id: 2,
      menu_Name: "Women",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Indian & Fusion Wear",
          subMenu_Path: "/women/indian-fusion-wear",
          items: [
            { item_Id: 1, item_Name: "Kurtas", item_Path: "/women/kurtas" },
            { item_Id: 2, item_Name: "Kurta Sets", item_Path: "/women/kurta-sets" },
            { item_Id: 3, item_Name: "Sarees", item_Path: "/women/sarees" },
            { item_Id: 4, item_Name: "Lehengas", item_Path: "/women/lehengas" },
            { item_Id: 5, item_Name: "Ethnic Dresses", item_Path: "/women/ethnic-dresses" },
            { item_Id: 6, item_Name: "Dupattas", item_Path: "/women/dupattas" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Western Wear",
          subMenu_Path: "/women/western-wear",
          items: [
            { item_Id: 1, item_Name: "Dresses", item_Path: "/women/dresses" },
            { item_Id: 2, item_Name: "Tops", item_Path: "/women/tops" },
            { item_Id: 3, item_Name: "T-Shirts", item_Path: "/women/t-shirts" },
            { item_Id: 4, item_Name: "Jeans", item_Path: "/women/jeans" },
            { item_Id: 5, item_Name: "Jumpsuits", item_Path: "/women/jumpsuits" },
            { item_Id: 6, item_Name: "Skirts", item_Path: "/women/skirts" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Footwear",
          subMenu_Path: "/women/footwear",
          items: [
            { item_Id: 1, item_Name: "Flats", item_Path: "/women/flats" },
            { item_Id: 2, item_Name: "Heels", item_Path: "/women/heels" },
            { item_Id: 3, item_Name: "Sneakers", item_Path: "/women/sneakers" },
            { item_Id: 4, item_Name: "Boots", item_Path: "/women/boots" },
            { item_Id: 5, item_Name: "Sandals", item_Path: "/women/sandals" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Sports & Active Wear",
          subMenu_Path: "/women/sports-activewear",
          items: [
            { item_Id: 1, item_Name: "Leggings", item_Path: "/women/leggings" },
            { item_Id: 2, item_Name: "Sports Bras", item_Path: "/women/sports-bras" },
            { item_Id: 3, item_Name: "Tracksuits", item_Path: "/women/tracksuits" },
            { item_Id: 4, item_Name: "Active T-Shirts", item_Path: "/women/active-t-shirts" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Lingerie & Sleepwear",
          subMenu_Path: "/women/lingerie-sleepwear",
          items: [
            { item_Id: 1, item_Name: "Bras", item_Path: "/women/bras" },
            { item_Id: 2, item_Name: "Briefs", item_Path: "/women/briefs" },
            { item_Id: 3, item_Name: "Shapewear", item_Path: "/women/shapewear" },
            { item_Id: 4, item_Name: "Nightwear", item_Path: "/women/nightwear" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "Beauty & Personal Care",
          subMenu_Path: "/women/beauty-personal-care",
          items: [
            { item_Id: 1, item_Name: "Makeup", item_Path: "/women/makeup" },
            { item_Id: 2, item_Name: "Skincare", item_Path: "/women/skincare" },
            { item_Id: 3, item_Name: "Haircare", item_Path: "/women/haircare" },
            { item_Id: 4, item_Name: "Fragrances", item_Path: "/women/fragrances" },
          ],
        },
        {
          subMenu_Id: 7,
          subMenu_Name: "Jewellery",
          subMenu_Path: "/women/jewellery",
          items: [
            { item_Id: 1, item_Name: "Earrings", item_Path: "/women/earrings" },
            { item_Id: 2, item_Name: "Necklaces", item_Path: "/women/necklaces" },
            { item_Id: 3, item_Name: "Rings", item_Path: "/women/rings" },
            { item_Id: 4, item_Name: "Bracelets", item_Path: "/women/bracelets" },
          ],
        },
        {
          subMenu_Id: 8,
          subMenu_Name: "Accessories",
          subMenu_Path: "/women/accessories",
          items: [
            { item_Id: 1, item_Name: "Handbags", item_Path: "/women/handbags" },
            { item_Id: 2, item_Name: "Sling Bags", item_Path: "/women/sling-bags" },
            { item_Id: 3, item_Name: "Wallets", item_Path: "/women/wallets" },
            { item_Id: 4, item_Name: "Watches", item_Path: "/women/watches" },
            { item_Id: 5, item_Name: "Sunglasses", item_Path: "/women/sunglasses" },
          ],
        },
      ],
    },
  
    // ================= KIDS =================
    {
      menu_Id: 3,
      menu_Name: "Kids",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Boys Clothing",
          subMenu_Path: "/kids/boys-clothing",
          items: [
            { item_Id: 1, item_Name: "T-Shirts", item_Path: "/kids/boys-t-shirts" },
            { item_Id: 2, item_Name: "Shirts", item_Path: "/kids/boys-shirts" },
            { item_Id: 3, item_Name: "Jeans", item_Path: "/kids/boys-jeans" },
            { item_Id: 4, item_Name: "Shorts", item_Path: "/kids/boys-shorts" },
            { item_Id: 5, item_Name: "Jackets", item_Path: "/kids/boys-jackets" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Girls Clothing",
          subMenu_Path: "/kids/girls-clothing",
          items: [
            { item_Id: 1, item_Name: "Dresses", item_Path: "/kids/girls-dresses" },
            { item_Id: 2, item_Name: "Tops", item_Path: "/kids/girls-tops" },
            { item_Id: 3, item_Name: "Skirts", item_Path: "/kids/girls-skirts" },
            { item_Id: 4, item_Name: "Leggings", item_Path: "/kids/girls-leggings" },
            { item_Id: 5, item_Name: "Ethnic Wear", item_Path: "/kids/girls-ethnic-wear" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Infants",
          subMenu_Path: "/kids/infants",
          items: [
            { item_Id: 1, item_Name: "Rompers", item_Path: "/kids/rompers" },
            { item_Id: 2, item_Name: "Bodysuits", item_Path: "/kids/bodysuits" },
            { item_Id: 3, item_Name: "Baby Sets", item_Path: "/kids/baby-sets" },
            { item_Id: 4, item_Name: "Winter Wear", item_Path: "/kids/baby-winter-wear" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Footwear",
          subMenu_Path: "/kids/footwear",
          items: [
            { item_Id: 1, item_Name: "Sneakers", item_Path: "/kids/sneakers" },
            { item_Id: 2, item_Name: "Sandals", item_Path: "/kids/sandals" },
            { item_Id: 3, item_Name: "School Shoes", item_Path: "/kids/school-shoes" },
            { item_Id: 4, item_Name: "Flip Flops", item_Path: "/kids/flip-flops" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Toys & Games",
          subMenu_Path: "/kids/toys-games",
          items: [
            { item_Id: 1, item_Name: "Soft Toys", item_Path: "/kids/soft-toys" },
            { item_Id: 2, item_Name: "Puzzles", item_Path: "/kids/puzzles" },
            { item_Id: 3, item_Name: "Building Blocks", item_Path: "/kids/building-blocks" },
            { item_Id: 4, item_Name: "Outdoor Toys", item_Path: "/kids/outdoor-toys" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "School Essentials",
          subMenu_Path: "/kids/school-essentials",
          items: [
            { item_Id: 1, item_Name: "School Bags", item_Path: "/kids/school-bags" },
            { item_Id: 2, item_Name: "Lunch Boxes", item_Path: "/kids/lunch-boxes" },
            { item_Id: 3, item_Name: "Water Bottles", item_Path: "/kids/water-bottles" },
            { item_Id: 4, item_Name: "Stationery", item_Path: "/kids/stationery" },
          ],
        },
      ],
    },
  
    // ================= HOME =================
    {
      menu_Id: 4,
      menu_Name: "Home",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Bed Linen",
          subMenu_Path: "/home/bed-linen",
          items: [
            { item_Id: 1, item_Name: "Bedsheets", item_Path: "/home/bedsheets" },
            { item_Id: 2, item_Name: "Bed Covers", item_Path: "/home/bed-covers" },
            { item_Id: 3, item_Name: "Pillow Covers", item_Path: "/home/pillow-covers" },
            { item_Id: 4, item_Name: "Blankets", item_Path: "/home/blankets" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Bath",
          subMenu_Path: "/home/bath",
          items: [
            { item_Id: 1, item_Name: "Bath Towels", item_Path: "/home/bath-towels" },
            { item_Id: 2, item_Name: "Hand Towels", item_Path: "/home/hand-towels" },
            { item_Id: 3, item_Name: "Bath Mats", item_Path: "/home/bath-mats" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Home Decor",
          subMenu_Path: "/home/decor",
          items: [
            { item_Id: 1, item_Name: "Vases", item_Path: "/home/vases" },
            { item_Id: 2, item_Name: "Wall Art", item_Path: "/home/wall-art" },
            { item_Id: 3, item_Name: "Clocks", item_Path: "/home/clocks" },
            { item_Id: 4, item_Name: "Candles", item_Path: "/home/candles" },
            { item_Id: 5, item_Name: "Mirrors", item_Path: "/home/mirrors" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Furniture",
          subMenu_Path: "/home/furniture",
          items: [
            { item_Id: 1, item_Name: "Sofas", item_Path: "/home/sofas" },
            { item_Id: 2, item_Name: "Chairs", item_Path: "/home/chairs" },
            { item_Id: 3, item_Name: "Coffee Tables", item_Path: "/home/coffee-tables" },
            { item_Id: 4, item_Name: "Bookshelves", item_Path: "/home/bookshelves" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Kitchen & Dining",
          subMenu_Path: "/home/kitchen-dining",
          items: [
            { item_Id: 1, item_Name: "Dinnerware", item_Path: "/home/dinnerware" },
            { item_Id: 2, item_Name: "Serveware", item_Path: "/home/serveware" },
            { item_Id: 3, item_Name: "Kitchen Tools", item_Path: "/home/kitchen-tools" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "Lighting",
          subMenu_Path: "/home/lighting",
          items: [
            { item_Id: 1, item_Name: "Table Lamps", item_Path: "/home/table-lamps" },
            { item_Id: 2, item_Name: "Floor Lamps", item_Path: "/home/floor-lamps" },
            { item_Id: 3, item_Name: "Pendant Lights", item_Path: "/home/pendant-lights" },
          ],
        },
        {
          subMenu_Id: 7,
          subMenu_Name: "Storage",
          subMenu_Path: "/home/storage",
          items: [
            { item_Id: 1, item_Name: "Storage Boxes", item_Path: "/home/storage-boxes" },
            { item_Id: 2, item_Name: "Shoe Racks", item_Path: "/home/shoe-racks" },
            { item_Id: 3, item_Name: "Wardrobe Organizers", item_Path: "/home/wardrobe-organizers" },
          ],
        },
      ],
    },
  
    // ================= BEAUTY =================
    {
      menu_Id: 5,
      menu_Name: "Beauty",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Makeup",
          subMenu_Path: "/beauty/makeup",
          items: [
            { item_Id: 1, item_Name: "Lipstick", item_Path: "/beauty/lipstick" },
            { item_Id: 2, item_Name: "Foundation", item_Path: "/beauty/foundation" },
            { item_Id: 3, item_Name: "Concealer", item_Path: "/beauty/concealer" },
            { item_Id: 4, item_Name: "Mascara", item_Path: "/beauty/mascara" },
            { item_Id: 5, item_Name: "Eyeliner", item_Path: "/beauty/eyeliner" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Skincare",
          subMenu_Path: "/beauty/skincare",
          items: [
            { item_Id: 1, item_Name: "Face Wash", item_Path: "/beauty/face-wash" },
            { item_Id: 2, item_Name: "Moisturizers", item_Path: "/beauty/moisturizers" },
            { item_Id: 3, item_Name: "Serums", item_Path: "/beauty/serums" },
            { item_Id: 4, item_Name: "Sunscreen", item_Path: "/beauty/sunscreen" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Haircare",
          subMenu_Path: "/beauty/haircare",
          items: [
            { item_Id: 1, item_Name: "Shampoo", item_Path: "/beauty/shampoo" },
            { item_Id: 2, item_Name: "Conditioner", item_Path: "/beauty/conditioner" },
            { item_Id: 3, item_Name: "Hair Oil", item_Path: "/beauty/hair-oil" },
            { item_Id: 4, item_Name: "Hair Masks", item_Path: "/beauty/hair-masks" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Fragrances",
          subMenu_Path: "/beauty/fragrances",
          items: [
            { item_Id: 1, item_Name: "Perfumes", item_Path: "/beauty/perfumes" },
            { item_Id: 2, item_Name: "Deodorants", item_Path: "/beauty/deodorants" },
            { item_Id: 3, item_Name: "Body Mists", item_Path: "/beauty/body-mists" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Bath & Body",
          subMenu_Path: "/beauty/bath-body",
          items: [
            { item_Id: 1, item_Name: "Body Wash", item_Path: "/beauty/body-wash" },
            { item_Id: 2, item_Name: "Body Lotion", item_Path: "/beauty/body-lotion" },
            { item_Id: 3, item_Name: "Body Scrubs", item_Path: "/beauty/body-scrubs" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "Beauty Tools",
          subMenu_Path: "/beauty/tools",
          items: [
            { item_Id: 1, item_Name: "Makeup Brushes", item_Path: "/beauty/makeup-brushes" },
            { item_Id: 2, item_Name: "Sponges", item_Path: "/beauty/sponges" },
            { item_Id: 3, item_Name: "Hair Dryers", item_Path: "/beauty/hair-dryers" },
            { item_Id: 4, item_Name: "Straighteners", item_Path: "/beauty/straighteners" },
          ],
        },
      ],
    },
  
    // ================= GENZ =================
    {
      menu_Id: 6,
      menu_Name: "Genz",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Streetwear",
          subMenu_Path: "/genz/streetwear",
          items: [
            { item_Id: 1, item_Name: "Graphic T-Shirts", item_Path: "/genz/graphic-t-shirts" },
            { item_Id: 2, item_Name: "Oversized Tees", item_Path: "/genz/oversized-tees" },
            { item_Id: 3, item_Name: "Hoodies", item_Path: "/genz/hoodies" },
            { item_Id: 4, item_Name: "Cargo Pants", item_Path: "/genz/cargo-pants" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Trending Fits",
          subMenu_Path: "/genz/trending-fits",
          items: [
            { item_Id: 1, item_Name: "Baggy Jeans", item_Path: "/genz/baggy-jeans" },
            { item_Id: 2, item_Name: "Co-ord Sets", item_Path: "/genz/coord-sets" },
            { item_Id: 3, item_Name: "Varsity Jackets", item_Path: "/genz/varsity-jackets" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Y2K Fashion",
          subMenu_Path: "/genz/y2k-fashion",
          items: [
            { item_Id: 1, item_Name: "Baby Tees", item_Path: "/genz/baby-tees" },
            { item_Id: 2, item_Name: "Retro Prints", item_Path: "/genz/retro-prints" },
            { item_Id: 3, item_Name: "Denim Skirts", item_Path: "/genz/denim-skirts" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Footwear",
          subMenu_Path: "/genz/footwear",
          items: [
            { item_Id: 1, item_Name: "Chunky Sneakers", item_Path: "/genz/chunky-sneakers" },
            { item_Id: 2, item_Name: "High Tops", item_Path: "/genz/high-tops" },
            { item_Id: 3, item_Name: "Platform Shoes", item_Path: "/genz/platform-shoes" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Accessories",
          subMenu_Path: "/genz/accessories",
          items: [
            { item_Id: 1, item_Name: "Caps", item_Path: "/genz/caps" },
            { item_Id: 2, item_Name: "Sunglasses", item_Path: "/genz/sunglasses" },
            { item_Id: 3, item_Name: "Crossbody Bags", item_Path: "/genz/crossbody-bags" },
            { item_Id: 4, item_Name: "Jewellery", item_Path: "/genz/jewellery" },
          ],
        },
        {
          subMenu_Id: 6,
          subMenu_Name: "Trending",
          subMenu_Path: "/genz/trending",
          items: [
            { item_Id: 1, item_Name: "Campus Style", item_Path: "/genz/campus-style" },
            { item_Id: 2, item_Name: "Festival Looks", item_Path: "/genz/festival-looks" },
            { item_Id: 3, item_Name: "New Drops", item_Path: "/genz/new-drops" },
          ],
        },
      ],
    },
  
    // ================= STUDIO =================
    {
      menu_Id: 7,
      menu_Name: "Studio",
      menu_HasSubmenu: true,
      subMenu: [
        {
          subMenu_Id: 1,
          subMenu_Name: "Outfit Ideas",
          subMenu_Path: "/studio/outfit-ideas",
          items: [
            { item_Id: 1, item_Name: "Casual Looks", item_Path: "/studio/casual-looks" },
            { item_Id: 2, item_Name: "Office Looks", item_Path: "/studio/office-looks" },
            { item_Id: 3, item_Name: "Weekend Outfits", item_Path: "/studio/weekend-outfits" },
          ],
        },
        {
          subMenu_Id: 2,
          subMenu_Name: "Trending Looks",
          subMenu_Path: "/studio/trending-looks",
          items: [
            { item_Id: 1, item_Name: "Street Style", item_Path: "/studio/street-style" },
            { item_Id: 2, item_Name: "Minimalist Looks", item_Path: "/studio/minimalist-looks" },
            { item_Id: 3, item_Name: "Festive Trends", item_Path: "/studio/festive-trends" },
          ],
        },
        {
          subMenu_Id: 3,
          subMenu_Name: "Style Guides",
          subMenu_Path: "/studio/style-guides",
          items: [
            { item_Id: 1, item_Name: "Denim Styling", item_Path: "/studio/denim-styling" },
            { item_Id: 2, item_Name: "Ethnic Styling", item_Path: "/studio/ethnic-styling" },
            { item_Id: 3, item_Name: "Color Pairing", item_Path: "/studio/color-pairing" },
          ],
        },
        {
          subMenu_Id: 4,
          subMenu_Name: "Creator Picks",
          subMenu_Path: "/studio/creator-picks",
          items: [
            { item_Id: 1, item_Name: "Influencer Edits", item_Path: "/studio/influencer-edits" },
            { item_Id: 2, item_Name: "Editor Favorites", item_Path: "/studio/editor-favorites" },
            { item_Id: 3, item_Name: "Community Looks", item_Path: "/studio/community-looks" },
          ],
        },
        {
          subMenu_Id: 5,
          subMenu_Name: "Collections",
          subMenu_Path: "/studio/collections",
          items: [
            { item_Id: 1, item_Name: "New Arrivals", item_Path: "/studio/new-arrivals" },
            { item_Id: 2, item_Name: "Trending Now", item_Path: "/studio/trending-now" },
            { item_Id: 3, item_Name: "Limited Drops", item_Path: "/studio/limited-drops" },
            { item_Id: 4, item_Name: "Lookbooks", item_Path: "/studio/lookbooks" },
          ],
        },
      ],
    },
  ];  



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
      id: 1,
      title: "Season End Fashion Sale",
      subtitle: "Up to 50% off on new arrivals",
      ctaText: "Shop Now",
      ctaUrl: "/products",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=500&fit=crop&auto=format&q=85",
    },
    {
      id: 2,
      title: "Men's Essential Collection",
      subtitle: "Sharp tailoring and everyday menswear",
      ctaText: "Shop Men",
      ctaUrl: "/categories/men",
      image: "https://images.unsplash.com/photo-1614252368727-99517bc90d7b",
    },
    {
      id: 3,
      title: "Women's New Season Edit",
      subtitle: "Effortless styles and statement pieces",
      ctaText: "Shop Women",
      ctaUrl: "/categories/women",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      id: 4,
      title: "Playful Kids' Wardrobe",
      subtitle: "Soft, durable styles made for every adventure",
      ctaText: "Shop Kids",
      ctaUrl: "/categories/kids",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=1600&h=500&fit=crop&auto=format&q=85",
    },
    {
      id: 5,
      title: "Modern Home & Living",
      subtitle: "Refresh your space with curated decor",
      ctaText: "Shop Home",
      ctaUrl: "/categories/home",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=500&fit=crop&auto=format&q=85",
    },
    {
      id: 6,
      title: "Clean Beauty & Skincare",
      subtitle: "Daily glow essentials and botanical formulas",
      ctaText: "Shop Beauty",
      ctaUrl: "/categories/beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&h=500&fit=crop&auto=format&q=85",
    },
    {
      id: 7,
      title: "Gen Z Studio Drop",
      subtitle: "Bold streetwear and limited-edition lookbooks",
      ctaText: "Explore Studio",
      ctaUrl: "/categories/genz",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&h=500&fit=crop&auto=format&q=85",
    },
  ];
  