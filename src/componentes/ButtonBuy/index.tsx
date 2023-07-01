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
      window.location.assign(data)
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  return(
      <button onClick={handleBuyButton}  className='bg-blue-900 flex justify-center items-center gap-[0.3rem] w-[25rem] h-[4rem] m-auto mt-[1.5rem] mb-[2rem]  rounded-md font-bold text-[1.5rem] text-center hover:bg-blue-950 transition-colors duration-300 '>
        ADICIONAR AO CARRINHO
        <ShoppingCart size={24} className='ml-[10px] mb-[5px]'/>
      </button>

  )
}