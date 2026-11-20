type QuantityInputProps = {
    id?:string;
    quantity: number;
    setProductQuantity: (value: number) => void;
    min?: number;
    max?: number;
  };
  
export function QuantityInput({id,quantity,setProductQuantity,min=1,max=100}:QuantityInputProps){
    
    return (
     <div className=" p-1" id={id}>
      <div  className="inline-flex items-center rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
        <button type="button" onClick={() => setProductQuantity(Math.max(min, quantity - 1))} aria-label="Decrease quantity" className="flex h-10 w-10 items-center justify-center rounded-l-lg text-gray-600 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-black hover:text-white hover:border hover:cursor-pointer"> − </button>
        <input type="number" disabled={quantity <= 1} value={quantity} min={1} max={100} aria-label="Quantity"  className="h-10 w-12 border-x border-gray-300 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none dark:border-gray-700 dark:text-white [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
        <button type="button" onClick={() => setProductQuantity(Math.max(min, quantity + 1))} aria-label="Increase quantity" className="flex h-10 w-10 items-center justify-center rounded-r-lg  text-gray-600  disabled:cursor-not-allowed disabled:opacity-40  hover:bg-black hover:text-white hover:border hover:cursor-pointer"> + </button>
      </div> 
     </div> 
    )
    
}