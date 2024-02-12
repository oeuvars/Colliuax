import Link from 'next/link';
import { FC } from 'react';

const Nabar: FC = () => {
    return (
      <section id="navbar" className="flex  justify-center z-40 relative">
        <div className="w-[50%] flex gap-5 backdrop-blur bg-white/80 border border-white/30 fixed mx-auto justify-between text-black px-5 py-3 rounded-xl mt-7">
            <Link href="#hero" className="flex gap-2">
                <img src="/icons/colliuax.svg" alt="" className="w-7 h-7 my-auto bg-neutral-800 p-1 rounded-md" />
                <h1 className="my-auto text-xl text-neutral-800 font-polysans-median">
                    Colliuax
                </h1>
            </Link>
            <div className='flex gap-1'>
              <Link href="#process" className="my-auto hover:bg-neutral-200 px-3 py-2 rounded-xl animation">
                  Process
              </Link>
              <Link href="#benefits" className="my-auto hover:bg-neutral-200 px-3 py-2 rounded-xl animation">
                  Benefits
              </Link>
              <Link href="#reviews" className="my-auto hover:bg-neutral-200 px-3 py-2 rounded-xl animation">
                  Reviews
              </Link>
              <Link href="#connect" className="my-auto hover:bg-neutral-200 px-3 py-2 rounded-xl animation">
                  Connect
              </Link>
            </div>
            <div className='flex gap-3'>
              <Link href="/auth/login" className='my-auto hover:bg-neutral-200 px-3 py-2 rounded-xl animation'>Login</Link>
              <div className='flex gap-1 bg-black rounded-xl px-3 py-2'>
                <Link href="/auth/login" className='my-auto text-white'>Sign up free</Link>
                <img src='/icons/arrow.svg' alt='' className='w-4 h-4 my-auto'/>
              </div>
            </div>
        </div>
      </section>
    );
};

export default Nabar;
