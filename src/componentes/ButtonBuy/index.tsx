'use client'
import { data } from "autoprefixer";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
interface ButtonProps{
  productFinal:{
    priceId: string
  }
}
export function ButtonBuy({productFinal}:ButtonProps){
  async function handleBuyButton(){
    try {
      const {data} = await axios.post('/api/payment', {
        priceId: productFinal.priceId,
      },
      )
      console.log(data)
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  return(
    <button onClick={handleBuyButton} className='bg-blue-900 h-[4.5rem] w-[25rem]  mx-auto mt-[1rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
          ADICIONAR AO CARRINHO
        <ShoppingCart size={24} className='inline ml-[10px] mb-[5px]'/>
    </button>
  )
}