export type productItem = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;

  originalPrice: number;
  discount: number;
  categoryPath: string;
  images: string[];

  rating: number;
  ratingCount: number;
  reviewCount: number;

  sizes: {
    name: string;
    stock: number;
  }[];

  description: string;

  specifications: {
    fabric: string;
    color: string;
    fit: string;
    occasion: string;
    washCare: string;
    length: string;
    sleeveLength: string;
    pattern: string;
  };

  delivery: {
    cashOnDelivery: boolean;
    freeDelivery: boolean;
    returnDays: number;
    exchangeAvailable: boolean;
  };

  coupons: {
    id: number;
    title: string;
    code: string;
    description: string;
  }[];

  reviews: {
    id: number;
    customerName: string;
    rating: number;
    comment: string;
  }[];

  brandInformation: {
    description: string;
  };

  sourceUrl: string;
};

export const Products: productItem[] = [
  {
    "id": 1,
    "name": "Yellow Floral Cowl-Neck Midi Dress",
    "brand": "H&M",
    "price": 1499,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 40,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 2,
    "name": "Pink Floral Cowl-Neck Midi Dress",
    "brand": "H&M",
    "price": 1599,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 3,
    "name": "Beige Knitted Maxi Dress",
    "brand": "H&M",
    "price": 2199,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 4,
    "name": "Dark Brown Knitted Maxi Dress",
    "brand": "H&M",
    "price": 2299,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 5,
    "name": "White Lace Strappy Mini Dress",
    "brand": "H&M",
    "price": 1899,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 6,
    "name": "Black Peplum Mini Dress",
    "brand": "& Other Stories",
    "price": 2599,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 7,
    "name": "Navy Satin Maxi Dress",
    "brand": "& Other Stories",
    "price": 2799,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 8,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 008)",
    "brand": "H&M",
    "price": 1499,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 40,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 9,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 009)",
    "brand": "H&M",
    "price": 1599,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 10,
    "name": "Beige Knitted Maxi Dress (Demo listing 010)",
    "brand": "H&M",
    "price": 2199,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 11,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 011)",
    "brand": "H&M",
    "price": 2299,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 12,
    "name": "White Lace Strappy Mini Dress (Demo listing 012)",
    "brand": "H&M",
    "price": 1899,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 13,
    "name": "Black Peplum Mini Dress (Demo listing 013)",
    "brand": "& Other Stories",
    "price": 2599,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 14,
    "name": "Navy Satin Maxi Dress (Demo listing 014)",
    "brand": "& Other Stories",
    "price": 2799,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 15,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 015)",
    "brand": "H&M",
    "price": 1524,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 39,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 16,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 016)",
    "brand": "H&M",
    "price": 1624,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 0
      },
      {
        "name": "M",
        "stock": 5
      },
      {
        "name": "L",
        "stock": 10
      },
      {
        "name": "XL",
        "stock": 15
      },
      {
        "name": "XXL",
        "stock": 20
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 17,
    "name": "Beige Knitted Maxi Dress (Demo listing 017)",
    "brand": "H&M",
    "price": 2224,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 1
      },
      {
        "name": "M",
        "stock": 6
      },
      {
        "name": "L",
        "stock": 11
      },
      {
        "name": "XL",
        "stock": 16
      },
      {
        "name": "XXL",
        "stock": 0
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 18,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 018)",
    "brand": "H&M",
    "price": 2324,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 18
      },
      {
        "name": "S",
        "stock": 2
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 17
      },
      {
        "name": "XXL",
        "stock": 1
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 19,
    "name": "White Lace Strappy Mini Dress (Demo listing 019)",
    "brand": "H&M",
    "price": 1924,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 19
      },
      {
        "name": "S",
        "stock": 3
      },
      {
        "name": "M",
        "stock": 8
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 18
      },
      {
        "name": "XXL",
        "stock": 2
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 20,
    "name": "Black Peplum Mini Dress (Demo listing 020)",
    "brand": "& Other Stories",
    "price": 2624,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 20
      },
      {
        "name": "S",
        "stock": 4
      },
      {
        "name": "M",
        "stock": 9
      },
      {
        "name": "L",
        "stock": 14
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 3
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 21,
    "name": "Navy Satin Maxi Dress (Demo listing 021)",
    "brand": "& Other Stories",
    "price": 2824,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 0
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 20
      },
      {
        "name": "XXL",
        "stock": 4
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 22,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 022)",
    "brand": "H&M",
    "price": 1549,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 38,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 1
      },
      {
        "name": "S",
        "stock": 6
      },
      {
        "name": "M",
        "stock": 11
      },
      {
        "name": "L",
        "stock": 16
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 5
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 23,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 023)",
    "brand": "H&M",
    "price": 1649,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 2
      },
      {
        "name": "S",
        "stock": 7
      },
      {
        "name": "M",
        "stock": 12
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 6
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 24,
    "name": "Beige Knitted Maxi Dress (Demo listing 024)",
    "brand": "H&M",
    "price": 2249,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 3
      },
      {
        "name": "S",
        "stock": 8
      },
      {
        "name": "M",
        "stock": 13
      },
      {
        "name": "L",
        "stock": 18
      },
      {
        "name": "XL",
        "stock": 2
      },
      {
        "name": "XXL",
        "stock": 7
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 25,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 025)",
    "brand": "H&M",
    "price": 2349,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 4
      },
      {
        "name": "S",
        "stock": 9
      },
      {
        "name": "M",
        "stock": 14
      },
      {
        "name": "L",
        "stock": 19
      },
      {
        "name": "XL",
        "stock": 3
      },
      {
        "name": "XXL",
        "stock": 8
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 26,
    "name": "White Lace Strappy Mini Dress (Demo listing 026)",
    "brand": "H&M",
    "price": 1949,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 5
      },
      {
        "name": "S",
        "stock": 10
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 20
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 9
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 27,
    "name": "Black Peplum Mini Dress (Demo listing 027)",
    "brand": "& Other Stories",
    "price": 2649,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 6
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 16
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 10
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 28,
    "name": "Navy Satin Maxi Dress (Demo listing 028)",
    "brand": "& Other Stories",
    "price": 2849,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 7
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 17
      },
      {
        "name": "L",
        "stock": 1
      },
      {
        "name": "XL",
        "stock": 6
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 29,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 029)",
    "brand": "H&M",
    "price": 1574,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 37,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 30,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 030)",
    "brand": "H&M",
    "price": 1674,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 31,
    "name": "Beige Knitted Maxi Dress (Demo listing 031)",
    "brand": "H&M",
    "price": 2274,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 32,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 032)",
    "brand": "H&M",
    "price": 2374,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 33,
    "name": "White Lace Strappy Mini Dress (Demo listing 033)",
    "brand": "H&M",
    "price": 1974,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 34,
    "name": "Black Peplum Mini Dress (Demo listing 034)",
    "brand": "& Other Stories",
    "price": 2674,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 35,
    "name": "Navy Satin Maxi Dress (Demo listing 035)",
    "brand": "& Other Stories",
    "price": 2874,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 36,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 036)",
    "brand": "H&M",
    "price": 1599,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 37,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 037)",
    "brand": "H&M",
    "price": 1699,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 0
      },
      {
        "name": "M",
        "stock": 5
      },
      {
        "name": "L",
        "stock": 10
      },
      {
        "name": "XL",
        "stock": 15
      },
      {
        "name": "XXL",
        "stock": 20
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 38,
    "name": "Beige Knitted Maxi Dress (Demo listing 038)",
    "brand": "H&M",
    "price": 2299,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 1
      },
      {
        "name": "M",
        "stock": 6
      },
      {
        "name": "L",
        "stock": 11
      },
      {
        "name": "XL",
        "stock": 16
      },
      {
        "name": "XXL",
        "stock": 0
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 39,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 039)",
    "brand": "H&M",
    "price": 2399,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 18
      },
      {
        "name": "S",
        "stock": 2
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 17
      },
      {
        "name": "XXL",
        "stock": 1
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 40,
    "name": "White Lace Strappy Mini Dress (Demo listing 040)",
    "brand": "H&M",
    "price": 1999,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 19
      },
      {
        "name": "S",
        "stock": 3
      },
      {
        "name": "M",
        "stock": 8
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 18
      },
      {
        "name": "XXL",
        "stock": 2
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 41,
    "name": "Black Peplum Mini Dress (Demo listing 041)",
    "brand": "& Other Stories",
    "price": 2699,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 20
      },
      {
        "name": "S",
        "stock": 4
      },
      {
        "name": "M",
        "stock": 9
      },
      {
        "name": "L",
        "stock": 14
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 3
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 42,
    "name": "Navy Satin Maxi Dress (Demo listing 042)",
    "brand": "& Other Stories",
    "price": 2899,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 36,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 0
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 20
      },
      {
        "name": "XXL",
        "stock": 4
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 43,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 043)",
    "brand": "H&M",
    "price": 1624,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 1
      },
      {
        "name": "S",
        "stock": 6
      },
      {
        "name": "M",
        "stock": 11
      },
      {
        "name": "L",
        "stock": 16
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 5
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 44,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 044)",
    "brand": "H&M",
    "price": 1724,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 2
      },
      {
        "name": "S",
        "stock": 7
      },
      {
        "name": "M",
        "stock": 12
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 6
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 45,
    "name": "Beige Knitted Maxi Dress (Demo listing 045)",
    "brand": "H&M",
    "price": 2324,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 3
      },
      {
        "name": "S",
        "stock": 8
      },
      {
        "name": "M",
        "stock": 13
      },
      {
        "name": "L",
        "stock": 18
      },
      {
        "name": "XL",
        "stock": 2
      },
      {
        "name": "XXL",
        "stock": 7
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 46,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 046)",
    "brand": "H&M",
    "price": 2424,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 4
      },
      {
        "name": "S",
        "stock": 9
      },
      {
        "name": "M",
        "stock": 14
      },
      {
        "name": "L",
        "stock": 19
      },
      {
        "name": "XL",
        "stock": 3
      },
      {
        "name": "XXL",
        "stock": 8
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 47,
    "name": "White Lace Strappy Mini Dress (Demo listing 047)",
    "brand": "H&M",
    "price": 2024,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 5
      },
      {
        "name": "S",
        "stock": 10
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 20
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 9
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 48,
    "name": "Black Peplum Mini Dress (Demo listing 048)",
    "brand": "& Other Stories",
    "price": 2724,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 6
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 16
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 10
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 49,
    "name": "Navy Satin Maxi Dress (Demo listing 049)",
    "brand": "& Other Stories",
    "price": 2924,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 35,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 7
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 17
      },
      {
        "name": "L",
        "stock": 1
      },
      {
        "name": "XL",
        "stock": 6
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 50,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 050)",
    "brand": "H&M",
    "price": 1649,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 51,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 051)",
    "brand": "H&M",
    "price": 1749,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 52,
    "name": "Beige Knitted Maxi Dress (Demo listing 052)",
    "brand": "H&M",
    "price": 2349,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 53,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 053)",
    "brand": "H&M",
    "price": 2449,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 54,
    "name": "White Lace Strappy Mini Dress (Demo listing 054)",
    "brand": "H&M",
    "price": 2049,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 55,
    "name": "Black Peplum Mini Dress (Demo listing 055)",
    "brand": "& Other Stories",
    "price": 2749,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 56,
    "name": "Navy Satin Maxi Dress (Demo listing 056)",
    "brand": "& Other Stories",
    "price": 2949,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 57,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 057)",
    "brand": "H&M",
    "price": 1674,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 58,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 058)",
    "brand": "H&M",
    "price": 1774,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 0
      },
      {
        "name": "M",
        "stock": 5
      },
      {
        "name": "L",
        "stock": 10
      },
      {
        "name": "XL",
        "stock": 15
      },
      {
        "name": "XXL",
        "stock": 20
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 59,
    "name": "Beige Knitted Maxi Dress (Demo listing 059)",
    "brand": "H&M",
    "price": 2374,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 1
      },
      {
        "name": "M",
        "stock": 6
      },
      {
        "name": "L",
        "stock": 11
      },
      {
        "name": "XL",
        "stock": 16
      },
      {
        "name": "XXL",
        "stock": 0
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 60,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 060)",
    "brand": "H&M",
    "price": 2474,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 18
      },
      {
        "name": "S",
        "stock": 2
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 17
      },
      {
        "name": "XXL",
        "stock": 1
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 61,
    "name": "White Lace Strappy Mini Dress (Demo listing 061)",
    "brand": "H&M",
    "price": 2074,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 19
      },
      {
        "name": "S",
        "stock": 3
      },
      {
        "name": "M",
        "stock": 8
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 18
      },
      {
        "name": "XXL",
        "stock": 2
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 62,
    "name": "Black Peplum Mini Dress (Demo listing 062)",
    "brand": "& Other Stories",
    "price": 2774,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 20
      },
      {
        "name": "S",
        "stock": 4
      },
      {
        "name": "M",
        "stock": 9
      },
      {
        "name": "L",
        "stock": 14
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 3
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 63,
    "name": "Navy Satin Maxi Dress (Demo listing 063)",
    "brand": "& Other Stories",
    "price": 2974,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 34,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 0
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 20
      },
      {
        "name": "XXL",
        "stock": 4
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 64,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 064)",
    "brand": "H&M",
    "price": 1699,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 1
      },
      {
        "name": "S",
        "stock": 6
      },
      {
        "name": "M",
        "stock": 11
      },
      {
        "name": "L",
        "stock": 16
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 5
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 65,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 065)",
    "brand": "H&M",
    "price": 1799,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 2
      },
      {
        "name": "S",
        "stock": 7
      },
      {
        "name": "M",
        "stock": 12
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 6
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 66,
    "name": "Beige Knitted Maxi Dress (Demo listing 066)",
    "brand": "H&M",
    "price": 2399,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 3
      },
      {
        "name": "S",
        "stock": 8
      },
      {
        "name": "M",
        "stock": 13
      },
      {
        "name": "L",
        "stock": 18
      },
      {
        "name": "XL",
        "stock": 2
      },
      {
        "name": "XXL",
        "stock": 7
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 67,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 067)",
    "brand": "H&M",
    "price": 2499,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 4
      },
      {
        "name": "S",
        "stock": 9
      },
      {
        "name": "M",
        "stock": 14
      },
      {
        "name": "L",
        "stock": 19
      },
      {
        "name": "XL",
        "stock": 3
      },
      {
        "name": "XXL",
        "stock": 8
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 68,
    "name": "White Lace Strappy Mini Dress (Demo listing 068)",
    "brand": "H&M",
    "price": 2099,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 5
      },
      {
        "name": "S",
        "stock": 10
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 20
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 9
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 69,
    "name": "Black Peplum Mini Dress (Demo listing 069)",
    "brand": "& Other Stories",
    "price": 2799,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 6
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 16
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 10
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 70,
    "name": "Navy Satin Maxi Dress (Demo listing 070)",
    "brand": "& Other Stories",
    "price": 2999,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 7
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 17
      },
      {
        "name": "L",
        "stock": 1
      },
      {
        "name": "XL",
        "stock": 6
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 71,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 071)",
    "brand": "H&M",
    "price": 1724,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 72,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 072)",
    "brand": "H&M",
    "price": 1824,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 73,
    "name": "Beige Knitted Maxi Dress (Demo listing 073)",
    "brand": "H&M",
    "price": 2424,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 74,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 074)",
    "brand": "H&M",
    "price": 2524,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 75,
    "name": "White Lace Strappy Mini Dress (Demo listing 075)",
    "brand": "H&M",
    "price": 2124,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 76,
    "name": "Black Peplum Mini Dress (Demo listing 076)",
    "brand": "& Other Stories",
    "price": 2824,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 77,
    "name": "Navy Satin Maxi Dress (Demo listing 077)",
    "brand": "& Other Stories",
    "price": 3024,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 33,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 78,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 078)",
    "brand": "H&M",
    "price": 1749,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 79,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 079)",
    "brand": "H&M",
    "price": 1849,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 0
      },
      {
        "name": "M",
        "stock": 5
      },
      {
        "name": "L",
        "stock": 10
      },
      {
        "name": "XL",
        "stock": 15
      },
      {
        "name": "XXL",
        "stock": 20
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 80,
    "name": "Beige Knitted Maxi Dress (Demo listing 080)",
    "brand": "H&M",
    "price": 2449,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 1
      },
      {
        "name": "M",
        "stock": 6
      },
      {
        "name": "L",
        "stock": 11
      },
      {
        "name": "XL",
        "stock": 16
      },
      {
        "name": "XXL",
        "stock": 0
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 81,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 081)",
    "brand": "H&M",
    "price": 2549,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 18
      },
      {
        "name": "S",
        "stock": 2
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 17
      },
      {
        "name": "XXL",
        "stock": 1
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 82,
    "name": "White Lace Strappy Mini Dress (Demo listing 082)",
    "brand": "H&M",
    "price": 2149,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 19
      },
      {
        "name": "S",
        "stock": 3
      },
      {
        "name": "M",
        "stock": 8
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 18
      },
      {
        "name": "XXL",
        "stock": 2
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 83,
    "name": "Black Peplum Mini Dress (Demo listing 083)",
    "brand": "& Other Stories",
    "price": 2849,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 20
      },
      {
        "name": "S",
        "stock": 4
      },
      {
        "name": "M",
        "stock": 9
      },
      {
        "name": "L",
        "stock": 14
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 3
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 84,
    "name": "Navy Satin Maxi Dress (Demo listing 084)",
    "brand": "& Other Stories",
    "price": 3049,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 0
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 20
      },
      {
        "name": "XXL",
        "stock": 4
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 85,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 085)",
    "brand": "H&M",
    "price": 1774,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 1
      },
      {
        "name": "S",
        "stock": 6
      },
      {
        "name": "M",
        "stock": 11
      },
      {
        "name": "L",
        "stock": 16
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 5
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 86,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 086)",
    "brand": "H&M",
    "price": 1874,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 2
      },
      {
        "name": "S",
        "stock": 7
      },
      {
        "name": "M",
        "stock": 12
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 6
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 87,
    "name": "Beige Knitted Maxi Dress (Demo listing 087)",
    "brand": "H&M",
    "price": 2474,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 3
      },
      {
        "name": "S",
        "stock": 8
      },
      {
        "name": "M",
        "stock": 13
      },
      {
        "name": "L",
        "stock": 18
      },
      {
        "name": "XL",
        "stock": 2
      },
      {
        "name": "XXL",
        "stock": 7
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 88,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 088)",
    "brand": "H&M",
    "price": 2574,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 4
      },
      {
        "name": "S",
        "stock": 9
      },
      {
        "name": "M",
        "stock": 14
      },
      {
        "name": "L",
        "stock": 19
      },
      {
        "name": "XL",
        "stock": 3
      },
      {
        "name": "XXL",
        "stock": 8
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 89,
    "name": "White Lace Strappy Mini Dress (Demo listing 089)",
    "brand": "H&M",
    "price": 2174,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 5
      },
      {
        "name": "S",
        "stock": 10
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 20
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 9
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 90,
    "name": "Black Peplum Mini Dress (Demo listing 090)",
    "brand": "& Other Stories",
    "price": 2874,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 6
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 16
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 10
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 91,
    "name": "Navy Satin Maxi Dress (Demo listing 091)",
    "brand": "& Other Stories",
    "price": 3074,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 32,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 7
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 17
      },
      {
        "name": "L",
        "stock": 1
      },
      {
        "name": "XL",
        "stock": 6
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 92,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 092)",
    "brand": "H&M",
    "price": 1799,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 93,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 093)",
    "brand": "H&M",
    "price": 1899,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 94,
    "name": "Beige Knitted Maxi Dress (Demo listing 094)",
    "brand": "H&M",
    "price": 2499,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 95,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 095)",
    "brand": "H&M",
    "price": 2599,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 96,
    "name": "White Lace Strappy Mini Dress (Demo listing 096)",
    "brand": "H&M",
    "price": 2199,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 97,
    "name": "Black Peplum Mini Dress (Demo listing 097)",
    "brand": "& Other Stories",
    "price": 2899,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 98,
    "name": "Navy Satin Maxi Dress (Demo listing 098)",
    "brand": "& Other Stories",
    "price": 3099,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 99,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 099)",
    "brand": "H&M",
    "price": 1824,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 100,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 100)",
    "brand": "H&M",
    "price": 1924,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 16
      },
      {
        "name": "S",
        "stock": 0
      },
      {
        "name": "M",
        "stock": 5
      },
      {
        "name": "L",
        "stock": 10
      },
      {
        "name": "XL",
        "stock": 15
      },
      {
        "name": "XXL",
        "stock": 20
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 101,
    "name": "Beige Knitted Maxi Dress (Demo listing 101)",
    "brand": "H&M",
    "price": 2524,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 28,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 17
      },
      {
        "name": "S",
        "stock": 1
      },
      {
        "name": "M",
        "stock": 6
      },
      {
        "name": "L",
        "stock": 11
      },
      {
        "name": "XL",
        "stock": 16
      },
      {
        "name": "XXL",
        "stock": 0
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 102,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 102)",
    "brand": "H&M",
    "price": 2624,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 18
      },
      {
        "name": "S",
        "stock": 2
      },
      {
        "name": "M",
        "stock": 7
      },
      {
        "name": "L",
        "stock": 12
      },
      {
        "name": "XL",
        "stock": 17
      },
      {
        "name": "XXL",
        "stock": 1
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 103,
    "name": "White Lace Strappy Mini Dress (Demo listing 103)",
    "brand": "H&M",
    "price": 2224,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 19
      },
      {
        "name": "S",
        "stock": 3
      },
      {
        "name": "M",
        "stock": 8
      },
      {
        "name": "L",
        "stock": 13
      },
      {
        "name": "XL",
        "stock": 18
      },
      {
        "name": "XXL",
        "stock": 2
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 104,
    "name": "Black Peplum Mini Dress (Demo listing 104)",
    "brand": "& Other Stories",
    "price": 2924,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 20
      },
      {
        "name": "S",
        "stock": 4
      },
      {
        "name": "M",
        "stock": 9
      },
      {
        "name": "L",
        "stock": 14
      },
      {
        "name": "XL",
        "stock": 19
      },
      {
        "name": "XXL",
        "stock": 3
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 105,
    "name": "Navy Satin Maxi Dress (Demo listing 105)",
    "brand": "& Other Stories",
    "price": 3124,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 31,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 0
      },
      {
        "name": "S",
        "stock": 5
      },
      {
        "name": "M",
        "stock": 10
      },
      {
        "name": "L",
        "stock": 15
      },
      {
        "name": "XL",
        "stock": 20
      },
      {
        "name": "XXL",
        "stock": 4
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 106,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 106)",
    "brand": "H&M",
    "price": 1849,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 1
      },
      {
        "name": "S",
        "stock": 6
      },
      {
        "name": "M",
        "stock": 11
      },
      {
        "name": "L",
        "stock": 16
      },
      {
        "name": "XL",
        "stock": 0
      },
      {
        "name": "XXL",
        "stock": 5
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 107,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 107)",
    "brand": "H&M",
    "price": 1949,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 25,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 2
      },
      {
        "name": "S",
        "stock": 7
      },
      {
        "name": "M",
        "stock": 12
      },
      {
        "name": "L",
        "stock": 17
      },
      {
        "name": "XL",
        "stock": 1
      },
      {
        "name": "XXL",
        "stock": 6
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 108,
    "name": "Beige Knitted Maxi Dress (Demo listing 108)",
    "brand": "H&M",
    "price": 2549,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 27,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 3
      },
      {
        "name": "S",
        "stock": 8
      },
      {
        "name": "M",
        "stock": 13
      },
      {
        "name": "L",
        "stock": 18
      },
      {
        "name": "XL",
        "stock": 2
      },
      {
        "name": "XXL",
        "stock": 7
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 109,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 109)",
    "brand": "H&M",
    "price": 2649,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 4
      },
      {
        "name": "S",
        "stock": 9
      },
      {
        "name": "M",
        "stock": 14
      },
      {
        "name": "L",
        "stock": 19
      },
      {
        "name": "XL",
        "stock": 3
      },
      {
        "name": "XXL",
        "stock": 8
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 110,
    "name": "White Lace Strappy Mini Dress (Demo listing 110)",
    "brand": "H&M",
    "price": 2249,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 25,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 5
      },
      {
        "name": "S",
        "stock": 10
      },
      {
        "name": "M",
        "stock": 15
      },
      {
        "name": "L",
        "stock": 20
      },
      {
        "name": "XL",
        "stock": 4
      },
      {
        "name": "XXL",
        "stock": 9
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 111,
    "name": "Black Peplum Mini Dress (Demo listing 111)",
    "brand": "& Other Stories",
    "price": 2949,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 6
      },
      {
        "name": "S",
        "stock": 11
      },
      {
        "name": "M",
        "stock": 16
      },
      {
        "name": "L",
        "stock": 0
      },
      {
        "name": "XL",
        "stock": 5
      },
      {
        "name": "XXL",
        "stock": 10
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 112,
    "name": "Navy Satin Maxi Dress (Demo listing 112)",
    "brand": "& Other Stories",
    "price": 3149,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 30,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 7
      },
      {
        "name": "S",
        "stock": 12
      },
      {
        "name": "M",
        "stock": 17
      },
      {
        "name": "L",
        "stock": 1
      },
      {
        "name": "XL",
        "stock": 6
      },
      {
        "name": "XXL",
        "stock": 11
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 113,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 113)",
    "brand": "H&M",
    "price": 1874,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 25,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 8
      },
      {
        "name": "S",
        "stock": 13
      },
      {
        "name": "M",
        "stock": 18
      },
      {
        "name": "L",
        "stock": 2
      },
      {
        "name": "XL",
        "stock": 7
      },
      {
        "name": "XXL",
        "stock": 12
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  },
  {
    "id": 114,
    "name": "Pink Floral Cowl-Neck Midi Dress (Demo listing 114)",
    "brand": "H&M",
    "price": 1974,
    "image": "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
    "originalPrice": 2599,
    "discount": 24,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/25/62/256299b3af5d81e95048b505b17a2ee288b6b474.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/fb/b2/fbb2c6b7e59a04240e69c58ad17e1020cc484a8d.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/dd/ee/ddeea9dcb71af5eec2552d2b808da2a7b2a05ef3.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6e/4c/6e4c3d0235fa3b139d52c9c96d9cc7e4c557904b.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 163,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 9
      },
      {
        "name": "S",
        "stock": 14
      },
      {
        "name": "M",
        "stock": 19
      },
      {
        "name": "L",
        "stock": 3
      },
      {
        "name": "XL",
        "stock": 8
      },
      {
        "name": "XXL",
        "stock": 13
      }
    ],
    "description": "Floral midi dress in pink with a soft neckline and long shoulder ties.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Pink / Purple",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645001.html"
  },
  {
    "id": 115,
    "name": "Beige Knitted Maxi Dress (Demo listing 115)",
    "brand": "H&M",
    "price": 2574,
    "image": "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
    "originalPrice": 3499,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/0c/fc/0cfccf305eaad791572fb7445e074c0e66807fe4.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/97/7c/977c0a0d741ea5d4571a945fadf8efdd593e233a.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/6a/83/6a8392ed59a7e473e563ef5d86ec878c153dd365.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/10/7c/107cfe903ba606bade0d0ca023960bd3c1b39746.jpg?imwidth=2160"
    ],
    "rating": 4.8,
    "ratingCount": 77,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 10
      },
      {
        "name": "S",
        "stock": 15
      },
      {
        "name": "M",
        "stock": 20
      },
      {
        "name": "L",
        "stock": 4
      },
      {
        "name": "XL",
        "stock": 9
      },
      {
        "name": "XXL",
        "stock": 14
      }
    ],
    "description": "Soft textured knit dress with ribbed edges and long sleeves.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Beige",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699003.html"
  },
  {
    "id": 116,
    "name": "Dark Brown Knitted Maxi Dress (Demo listing 116)",
    "brand": "H&M",
    "price": 2674,
    "image": "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
    "originalPrice": 3599,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/5a/20/5a2045f073f7e85c64bc6c6da1d4d9af9976ae41.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f3/a5/f3a52754a3a07962eb8817d187cd1c35c67e41c0.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/f7/fe/f7fe4ee038985c2a2cda87243cf6027eadcb987c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/39/7a/397ae2ee854bd59b8a28ef307bc4c9a83aac8c23.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 91,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 11
      },
      {
        "name": "S",
        "stock": 16
      },
      {
        "name": "M",
        "stock": 0
      },
      {
        "name": "L",
        "stock": 5
      },
      {
        "name": "XL",
        "stock": 10
      },
      {
        "name": "XXL",
        "stock": 15
      }
    ],
    "description": "Long knitted dress with a straight silhouette and side slit.",
    "specifications": {
      "fabric": "Knitted blend",
      "color": "Dark Brown",
      "fit": "Relaxed Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Long Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1350699002.html"
  },
  {
    "id": 117,
    "name": "White Lace Strappy Mini Dress (Demo listing 117)",
    "brand": "H&M",
    "price": 2274,
    "image": "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
    "originalPrice": 2999,
    "discount": 24,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/bc/ef/bcefb769f352f4ea0d1f8006d31656194c569a28.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/59/e3/59e3ffedba01750a02e47a947f958317edc62c2c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3a/4f/3a4f4eedb6533caf7a60b27f292d80f35b3dd071.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/35/99/3599268570e13cc75e68711d89dc6697b7a06354.jpg?imwidth=2160"
    ],
    "rating": 4.1,
    "ratingCount": 97,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 12
      },
      {
        "name": "S",
        "stock": 17
      },
      {
        "name": "M",
        "stock": 1
      },
      {
        "name": "L",
        "stock": 6
      },
      {
        "name": "XL",
        "stock": 11
      },
      {
        "name": "XXL",
        "stock": 16
      }
    ],
    "description": "Short white dress with lace details, multiple straps and a scalloped hem.",
    "specifications": {
      "fabric": "Embroidered fabric",
      "color": "White",
      "fit": "Regular Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Lace"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1336817001.html"
  },
  {
    "id": 118,
    "name": "Black Peplum Mini Dress (Demo listing 118)",
    "brand": "& Other Stories",
    "price": 2974,
    "image": "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 3999,
    "discount": 26,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/2f/f2/2ff279cbe05e6fd78aaace20e6f74c4a342040ce.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/fb/6e/fb6ec54526fe9ea22ac5f72cc2ef772743e0a054.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/70/e1/70e156463f94c4b7f1f8cde221ab6db180cd9b4e.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.7,
    "ratingCount": 120,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 13
      },
      {
        "name": "S",
        "stock": 18
      },
      {
        "name": "M",
        "stock": 2
      },
      {
        "name": "L",
        "stock": 7
      },
      {
        "name": "XL",
        "stock": 12
      },
      {
        "name": "XXL",
        "stock": 17
      }
    ],
    "description": "Structured sleeveless dress with a flared peplum skirt.",
    "specifications": {
      "fabric": "Nylon",
      "color": "Black",
      "fit": "Fitted Bodice",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Mini",
      "sleeveLength": "Sleeveless",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1320090001.html"
  },
  {
    "id": 119,
    "name": "Navy Satin Maxi Dress (Demo listing 119)",
    "brand": "& Other Stories",
    "price": 3174,
    "image": "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
    "originalPrice": 4499,
    "discount": 29,
    "categoryPath": "/women/dresses",
    "images": [
      "https://media.stories.com/assets/005/de/b9/deb9bdc6f5ab6e12718016613356093f04aae1ed.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/a3/4c/a34c28af392621d2f87cb2269580f4dd8fb21dd7.jpg?aspectRatio=2%2C3&imwidth=2160",
      "https://media.stories.com/assets/005/c0/81/c081d49e8d521815c9510b7611a1208315fdb188.jpg?aspectRatio=2%2C3&imwidth=2160"
    ],
    "rating": 4.3,
    "ratingCount": 61,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 14
      },
      {
        "name": "S",
        "stock": 19
      },
      {
        "name": "M",
        "stock": 3
      },
      {
        "name": "L",
        "stock": 8
      },
      {
        "name": "XL",
        "stock": 13
      },
      {
        "name": "XXL",
        "stock": 18
      }
    ],
    "description": "Flowing navy dress with a round neckline and diagonal skirt seams.",
    "specifications": {
      "fabric": "Satin",
      "color": "Navy Blue",
      "fit": "Slim Fit",
      "occasion": "Occasion Wear",
      "washCare": "Follow garment care label",
      "length": "Maxi",
      "sleeveLength": "Cap Sleeve",
      "pattern": "Solid"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from & Other Stories."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1324174001.html"
  },
  {
    "id": 120,
    "name": "Yellow Floral Cowl-Neck Midi Dress (Demo listing 120)",
    "brand": "H&M",
    "price": 1899,
    "image": "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
    "originalPrice": 2499,
    "discount": 24,
    "categoryPath": "/women/dresses",
    "images": [
      "https://image.hm.com/assets/hm/2b/fc/2bfc59a47f926cf8fdf24878f28900b5f7349b7c.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/67/90/6790d534155640cc5a5799aa06f99fa511667c0b.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/66/f3/66f3896c4b9606f3539d9d273177f2d418a8c5a9.jpg?imwidth=2160",
      "https://image.hm.com/assets/hm/3f/f9/3ff9660de39fb0615948e4bcbef3c3e39203655c.jpg?imwidth=2160"
    ],
    "rating": 4.2,
    "ratingCount": 161,
    "reviewCount": 2,
    "sizes": [
      {
        "name": "XS",
        "stock": 15
      },
      {
        "name": "S",
        "stock": 20
      },
      {
        "name": "M",
        "stock": 4
      },
      {
        "name": "L",
        "stock": 9
      },
      {
        "name": "XL",
        "stock": 14
      },
      {
        "name": "XXL",
        "stock": 19
      }
    ],
    "description": "Tie-strap midi dress with a draped neckline and floral print.",
    "specifications": {
      "fabric": "Polyester",
      "color": "Yellow / Blue",
      "fit": "Slim Fit",
      "occasion": "Casual",
      "washCare": "Follow garment care label",
      "length": "Midi",
      "sleeveLength": "Sleeveless",
      "pattern": "Floral"
    },
    "delivery": {
      "cashOnDelivery": true,
      "freeDelivery": true,
      "returnDays": 7,
      "exchangeAvailable": true
    },
    "coupons": [
      {
        "id": 1,
        "title": "Extra 10% OFF",
        "code": "EXTRA10",
        "description": "Sample coupon for testing."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "customerName": "Sample Shopper",
        "rating": 5,
        "comment": "Sample review: comfortable fit."
      },
      {
        "id": 2,
        "customerName": "Demo Customer",
        "rating": 4,
        "comment": "Sample review: lovely design."
      }
    ],
    "brandInformation": {
      "description": "Explore dresses from H&M."
    },
    "sourceUrl": "https://www2.hm.com/en_gb/productpage.1351645002.html"
  }
]
