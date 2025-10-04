import Image from 'next/image'

function Loading(): React.JSX.Element {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <Image src="/logo.png" alt="Logo" width={120} height={120} className='animate-pulse rounded-2xl' />
    </div>
  )
}

export default Loading