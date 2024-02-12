import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='relative w-screen overflow-hidden'>
        <div className='gradient-panel'></div>
        <img src='/images/hero.png' alt='' className='w-screen flex justify-start object-cover ml-60 -mt-60'/>
      </div>
      <div className='absolute flex flex-col justify-center items-center'>
        <h1 className='text-[110px] text-center font-polysans-median leading-none'>Management, Planning, collaboration</h1>
        <p className='text-[100px] leading-none font-cirka tracking-tight my-5'>All in One</p>
        <p className='font-polysans-slim text-pretty text-2xl text-center mt-5'>Colliuax is a content editor and real-time collaboration tool <br /> to craft exactly the content/collaboration experience <br /> you’d like to have – built for everyone.</p>
        <div className='flex gap-5 mt-10'>
          <button className='bg-black flex rounded-2xl px-5 py-3 gap-3'>
            <p className='text-lg text-white my-auto'>Sign up free</p>
            <img src='/icons/arrow.svg' alt='' className='w-4 h-4 my-auto'/>
          </button>
          <button className='bg-transparent border-2 border-black flex rounded-2xl px-5 py-3 gap-3'>
            <p className='text-lg text-black my-auto'>Try now</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
