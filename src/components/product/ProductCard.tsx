import Link from "next/link"
import { ViewTransition } from "react"
import { productItem } from "@/data/products"

type ProductCardProps={
    product: productItem
}
export  default function ProductCard({product}: ProductCardProps){
    return(
        
        <Link key={product.id}  href={`/product/${product.id}`}>
        <div className="relative w-full border border-gray-100"> 
                <ViewTransition  name={`product-${product.id}`} >
                 <img src={product.image} alt={product.name} className="product-bg"/>
                </ViewTransition>
                <div className="p-3">
                    <h3 className="font-bold">{product.brand}</h3>
                    <p className="text-sm text-gray-500">{product.name}</p>
                    <span className="font-semibold">₹{product.price}</span>
                </div>
        </div>
        </Link> 
    )
}