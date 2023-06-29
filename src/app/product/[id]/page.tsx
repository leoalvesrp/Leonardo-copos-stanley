import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import copo1 from'../../../../public/copos/copo-1.png'

interface ProductProps{
  params:{
    id:string,
  }
}

export default function Product({params}:ProductProps) {
  return (
    <main className='grid grid-cols-2 gap-[2rem] max-w-[1000px] m-auto mt-[3rem]'>
      <div className='flex justify-center shadow-sm max-w-full gap-[5rem]'>
        <Image className='object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-md w-full' src={copo1} alt=''/>
      </div>
        <aside className='flex-col justify-center bg-gray-800 text-center font-sans rounded-md'>
          <h1 className='text-[2rem]'>Copo Térmico Stanley</h1>
          <span className='block text-[1.5rem] text-green-400'>R$ 70,00</span>
          <p className="text-[1rem]">O Copo Stanley é um copo térmico durável e icônico feito de aço inoxidável de alta qualidade. Ele é conhecido por sua resistência e capacidade de manter bebidas quentes ou frias por longos períodos. Com uma tampa hermética, é perfeito para viagens e atividades ao ar livre. Possui alça para facilitar o transporte, boca larga para beber confortavelmente e é resistente a arranhões. Além disso, promove a sustentabilidade ao reduzir o uso de copos descartáveis. O Copo Stanley é o companheiro ideal para manter suas bebidas na temperatura certa em qualquer lugar.</p>
          <span>473ml</span>
          <p className='text-[1.5rem]'>Branco</p>
          <button className='bg-blue-900 h-[4.5rem] w-[25rem]  mx-auto mt-[1rem] mb-[1rem]  rounded-md border-0 font-bold text-[1.5rem] hover:bg-blue-950 transition-colors duration-300 '>
            ADICIONAR AO CARRINHO
            <ShoppingCart size={24} className='inline align-middle ml-[10px] mb-[5px]'/>
            </button>
        </aside>
      </main>
  )
}