import Image from'next/image'
import copo1 from'../../public/copos/copo-1.png'
import copo2 from'../../public/copos/copo-2.png'
import copo3 from'../../public/copos/copo-3.webp'

import {ShoppingCart} from'lucide-react'

export default function Home() {
  return (
    <main className='grid grid-cols-3 gap-[2rem] max-w-[1180px] m-auto mt-[3rem]'>
      <div className='flex-col justify-center shadow-sm'>
        <Image className='w-full object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-t-md h-[300px]' src={copo1} alt=''/>
        <footer className='flex-col justify-center bg-gray-800 text-center font-sans rounded-md'>
          <h1 className='text-[2rem]'>Copo Térmico Stanley</h1>
          <span>473ml</span>
          <p className='text-[1.5rem]'>Branco</p>
          <span className='block text-[1.5rem] text-green-400'>R$ 70,00</span>
          <button className='bg-blue-900 h-[3.5rem] w-[15rem]  mx-auto mt-[0.5rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
            COMPRAR
            <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
            </button>
        </footer>
      </div>
      <div className='flex-col justify-center shadow-sm'>
        <Image className='w-full object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-t-md h-[300px]' src={copo2} alt=''/>
        <footer className='flex-col justify-center bg-gray-800 text-center font-sans rounded-md'>
          <h1 className='text-[2rem]'>Copo Térmico Stanley</h1>
          <span>473ml</span>
          <p className='text-[1.5rem]'>Branco</p>
          <span className='block text-[1.5rem] text-green-400'>R$ 70,00</span>
          <button className='bg-blue-900 h-[3.5rem] w-[15rem]  mx-auto mt-[0.5rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
            COMPRAR
            <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
            </button>
        </footer>
      </div>
      <div className='flex-col justify-center shadow-sm'>
        <Image className='w-full object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-t-md h-[300px]' src={copo3} alt=''/>
        <footer className='flex-col justify-center bg-gray-800 text-center font-sans rounded-md'>
          <h1 className='text-[2rem]'>Copo Térmico Stanley</h1>
          <span>473ml</span>
          <p className='text-[1.5rem]'>Branco</p>
          <span className='block text-[1.5rem] text-green-400'>R$ 70,00</span>
          <button className='bg-blue-900 h-[3.5rem] w-[15rem]  mx-auto mt-[0.5rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
            COMPRAR
            <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
            </button>
        </footer>
      </div>
      
      
      
      
      
      
    </main>
      
      
      
  )
}
