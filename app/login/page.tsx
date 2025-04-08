import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import sidePic from '../../public/img/mar.jpg'

export default function login() {
    return (
        <div className='bg-black text-white max-h-screen flex'>
            <div className='w-3/5 ml-auto'>
                <Image src={sidePic} alt='main picture' className=' max-h-full w-2xl mx-auto' />
            </div>


            <div className='w-2/5  '>
                <div className='p-9 text-7xl font-bold mt-20 font-[Verdana]'>
                    Happening now
                </div>

                <div className='px-9 text-4xl font-bold mt-9 font-[Verdana]'>
                    Join today.
                </div>

                <Button className='mx-9 mt-8 rounded-4xl py-5 px-25 bg-blue-400 font-bold'>Create account</Button>
                <div className='text-xs text-gray-500 px-9 mt-1'>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including Cookie Use.</div>

                <div className='mt-40 '>
                    <div className='px-9 text-xl font-bold'>Already have an account?</div>
                    <Button className='mx-9 mt-5 rounded-4xl py-5 px-31 text-blue-400 bg-black border-gray-500 border font-bold'>Sign in</Button>

                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} className='flex items-center justify-center w-full p-2 text-zinc-400 text-sm'>© 2025 Beak.</div>
        </div>
    )
}
