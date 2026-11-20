import ProductCard from "./ProductCard";
import { Products, productItem } from "@/data/products";
type ProductCardProps = {
    product: productItem;
  };
export  default function ProductGrid(){
    return(
        <div className="w-[90%] mt-10 m-auto grid grid-cols-5 gap-4">
            { Products.map((product)=>(
                <div key={product.id}>
                    <ProductCard  
                        key={product.id}
                        product={product} 
                    />
                </div>
            ))

            }
            
        </div>
    )
}