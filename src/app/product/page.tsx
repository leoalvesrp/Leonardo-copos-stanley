import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Product</h1>
      <Link href={`/`}>Home</Link>
    </div>
  )
}