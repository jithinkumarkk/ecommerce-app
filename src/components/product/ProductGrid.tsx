import ProductCard from "./ProductCard";
import { Products } from "@/data/products";
export  default function ProductGrid(){
    return(
        <div className="w-[90%] mt-10 m-auto grid grid-cols-5 gap-4">
            { Products.map((product)=>(
                <div key={product.id}>
                    <ProductCard  
                        name={product.name}
                        image={product.image}
                        brand={product.brand}
                        price={product.price}
                    />
                </div>
            ))

            }
            
        </div>
    )
}