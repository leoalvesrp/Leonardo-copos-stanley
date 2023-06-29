import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import copo1 from'../../../../public/copos/copo-1.png'
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface ProductProps{
  params:{
    id:string,
  }
}

export default async function Product({params}:ProductProps) {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });
  
  const price = product.default_price as Stripe.Price;
  let formattedPrice = '';
  if (price && price.unit_amount) {
    formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100);
  }
  
  const productFinal = {
    id:product.id,
    name: product.name,
    price: formattedPrice,
    image: product.images[0],
    cor:product.metadata.cor,
    description: product.description

  }   

  return (
    <main className='grid grid-cols-2 gap-[2rem] max-w-[1000px] m-auto mt-[3rem]'>
      <div key={productFinal.id} className='flex justify-center shadow-sm max-w-full gap-[5rem]'>
        <Image className='object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-md w-full' src={productFinal.image} width={450} height={450} alt=''/>
      </div>
        <aside className='flex-col justify-center bg-gray-800 text-center font-sans rounded-md'>
          <h1 className='text-[2.8rem]'>{productFinal.name}</h1>
          <span className='block text-[2rem] text-green-400'>{productFinal.price}</span>
          <p className="text-[1.5rem] text-start m-[1rem]">
            {productFinal.description}
          </p>
          <p className='text-[2.5rem]'>{productFinal.cor}</p>
          <span className="block text-[1.2rem]">473ml</span>
          <button className='bg-blue-900 h-[4.5rem] w-[25rem]  mx-auto mt-[1rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
            ADICIONAR AO CARRINHO
            <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
            </button>
        </aside>
      </main>
  )
}