import { redirect } from 'next/navigation'

interface SuccessProps {
  params: {
    id: string
  }
}

export default async function Success({params}:SuccessProps){
  const sessionId = params.id
  if(!sessionId){
    redirect('/')
  }
    return(
      <main className="flex flex-col justify-center items-center gap-[2rem] max-w-[500px] m-auto mt-[6rem] font-sans">
      </main>
    )
}