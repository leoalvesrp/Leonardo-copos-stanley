import './globals.css';
import { Roboto_Flex as Roboto } from 'next/font/google';
import Image from 'next/image';
import logoImg from '../../public/logo.png';
import Link from 'next/link';
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Leonardo Copo Stanley',
  description: 'Copos Stanley',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-gray-700 text-gray-100`}>
        <header className="flex max-w-[1180px] m-auto align-middle mt-[2rem]">
          <Link href={`/`}>
            <Image src={logoImg} width={300} height={500} alt="" />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
