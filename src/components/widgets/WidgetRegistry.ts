import BannerCarousel from "../home/bannerCarousel";
import  ProductCard  from "../product/ProductCard";
import ProductCarousel   from "../product/ProductCarousel";
import ProductGrid from "../product/ProductGrid";


export const WidgetRegistry ={
    bannerCarousel: BannerCarousel,
    productCard: ProductCard,
    productCarousel:ProductCarousel,
    productGrid: ProductGrid,
}
export type WidgetType = keyof typeof WidgetRegistry