'use client'
import { ShoppingCart } from "lucide-react";
interface ButtonProps{
  productFinal:{
    priceId: string
  }
}
export function ButtonBuy({productFinal}:ButtonProps){
  async function handleBuyButton(){
    console.log(productFinal.priceId)
  }
  return(
    <button onClick={handleBuyButton} className='bg-blue-900 h-[4.5rem] w-[25rem]  mx-auto mt-[1rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
        ADICIONAR AO CARRINHO
      <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
    </button>
  )
}