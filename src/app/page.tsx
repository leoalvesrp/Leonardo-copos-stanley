import Image from'next/image'

import {ShoppingCart} from'lucide-react'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Link from 'next/link'

interface ProductsProps {
  id: string;
  name: string;
  imageUrl: string;
  cor:string ;
  price: string;
}

export default async function Home() {
  const response = await stripe.products.list({
    expand:['data.default_price']
  })
  const products:ProductsProps[] = response.data.map(product =>{
    const price = product.default_price as Stripe.Price;
    let formattedPrice = '';
    if (price && price.unit_amount) {
      formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100);
    }

    return{
    id: product.id, 
    name: product.name, 
    imageUrl: product.images[0] ,
    cor:product.metadata.cor,
    price: formattedPrice
  };
  })
  

  return (
    <main className='grid grid-cols-3 gap-[2rem] max-w-[1180px] m-auto mt-[3rem]'>
      {products.map((product)=>{
      return(
      <div key={product.id} className='flex-col justify-center shadow-sm'>
        <Image className='w-full object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-t-md h-[300px]' src={product.imageUrl} width={450} height={450} alt=''/>
        <footer className='grid justify-center items-center bg-gray-800 text-center font-sans rounded-md]'>
          <h1 className='text-[2rem]'>{product.name}</h1>
          <span>473ml</span>
          <p className='text-[1.5rem]'>{product.cor}</p>
          <span className='block text-[1.5rem] text-green-400'>{product.price}</span>
          <Link href={`/product/${product.id}`} className='bg-blue-900 flex justify-center items-center gap-[0.3rem] w-[16rem] h-[3.4rem] m-auto mb-[1rem]  rounded-md font-bold text-[1.5rem] text-center hover:bg-blue-950 transition-colors duration-300 '>
              COMPRAR
              <ShoppingCart size={24} className='mb-[0.3rem]'/>
          </Link>
        </footer>
      </div>
        )
      })}
    </main>
      
      
  )
}

