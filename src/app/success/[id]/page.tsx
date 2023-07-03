import { Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

interface SuccessProps {
  params: {
    id: string;
  };
}

export default async function Success({ params }: SuccessProps) {
  const sessionId = params.id;
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });
  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;
  const productFinal = {
    info: {
      customerName: customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
        cor: product.metadata.cor,
      },
    },
  };

  return (
    <main className="flex flex-col justify-center items-center gap-[2rem] max-w-[500px] m-auto mt-[6rem] font-sans">
      <div className="">
        <div className="text-center">
          <h1 className="text-[3rem] text-gray-50">Compra efetuada!</h1>
          <div>
            <Image
              className="object-cover bg-gradient-to-r from-indigo-500 to-green-400 rounded-md m-[auto] mt-[2rem] mb-[3rem]"
              src={productFinal.info.product.imageUrl}
              width={200}
              height={200}
              alt=""
            />
          </div>
          <p className="text-[1rem]">
            Parabéns{' '}
            <strong className="text-green-400">
              {productFinal.info.customerName?.toUpperCase()}
            </strong>
            , você adquiriu seu {productFinal.info.product.name}{' '}
            <span>475ml</span> <strong>{productFinal.info.product.cor}</strong>
          </p>
        </div>
        <Link
          href={`/`}
          className="bg-blue-900 flex justify-center items-center gap-[0.3rem] w-[16rem] h-[3.4rem] m-auto mb-[1rem]  rounded-md font-bold text-[1.5rem] text-center hover:bg-blue-950 transition-colors duration-300 mt-[1.5rem] "
        >
          <Home size={24} className="mb-[0.3rem]" />
          Pagina inicial
        </Link>
      </div>
    </main>
  );
}
