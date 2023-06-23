import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <h1 className='text-2xl font-semibold'>Home</h1>
      <Link href={`/product`}>Product</Link>
    </div>
  )
}
