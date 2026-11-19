
type ProductCardProps={
    name: string,
    image: string,
    brand: string, 
    price:number
}
export  default function ProductCard({name,image,brand,price}: ProductCardProps){
    return(
        <div className="relative w-full border border-gray-100">
              
                <img src={image} alt={name} className="product-bg"/>
                <div className="p-3">
                    <h3 className="font-bold">{brand}</h3>
                    <p className="text-sm text-gray-500">{name}</p>
                    <span className="font-semibold">₹{price}</span>
                </div>
        </div>
    )
}