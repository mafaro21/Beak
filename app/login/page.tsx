import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import sidePic from '../../public/img/mar.jpg'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"

export default function login() {
    return (
        <div className='bg-black text-white min-h-screen flex'>
            <div className='w-3/5 ml-auto'>
                <Image src={sidePic} alt='main picture' className=' max-h-screen lg:w-md md:hidden lg:block mx-auto' />
            </div>


            <div className='lg:w-2/5 md:w-full '>
                <div className="text-5xl font-bold px-9 mt-7  sm:hidden md:block lg:hidden">🐦</div>

                <div className='p-9 lg:text-6xl md:text-6xl font-bold lg:mt-20 md:mt-7 mr-auto font-[Verdana]'>
                    Happening now
                </div>

                <div className='px-9 lg:text-4xl md:text-2xl font-bold mt-9 font-[Verdana]'>
                    Join today.
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='mx-9 lg:mt-8 md:mt-4 rounded-4xl py-5 px-25 bg-blue-500 hover:bg-blue-600 font-bold hover:cursor-pointer'>Create account</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[620px] px-20 bg-black text-white  rounded-2xl">
                        <DialogHeader className=''>
                            <DialogTitle className='mx-auto'>
                                <div className="text-4xl " style={{ marginTop: '-15px' }}>🐦</div>
                            </DialogTitle>

                            <DialogTitle className='pt-6 text-3xl font-bold'>Create your account</DialogTitle>
                        </DialogHeader>
                        <div className=" mx-auto w-full mt-5">
                            <div className=" items-center">
                                <input id="name" placeholder="Name" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                            </div>
                            <div className=" items-center mt-6">
                                <input id="username" placeholder="Email" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                            </div>
                            <div className=" items-center mt-6">
                                <input id="username" placeholder="Password" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                            </div>
                            <div className=" items-center mt-6">
                                <input id="username" placeholder="Re-type Password" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                            </div>
                        </div>
                        <DialogFooter className='pb-2'>
                            <Button type="submit" className='mx-auto bg-white text-black font-bold rounded-3xl mt-19 py-6 w-full text-md'>Join the nest</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className='text-xs text-gray-500 px-9 mt-1'>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including Cookie Use.</div>

                <div className='lg:mt-40 md:mt-13 '>
                    <div className='px-9 text-xl font-bold'>Already have an account?</div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='mx-9 mt-5 rounded-4xl py-5 px-31 text-blue-400 bg-black hover:bg-slate-800 border-gray-500 border font-bold hover:cursor-pointer'>Sign in</Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[620px] px-30 bg-black text-white  rounded-2xl">
                            <DialogHeader className=''>
                                <DialogTitle className='mx-auto'>
                                    <div className="text-4xl " style={{ marginTop: '-15px' }}>🐦</div>
                                </DialogTitle>

                                <DialogTitle className='pt-6 text-3xl font-bold'>Sign in to Beak.</DialogTitle>
                            </DialogHeader>
                            <div className=" mx-auto w-full mt-5">
                                <div className=" items-center">
                                    <input id="name" placeholder="Email, or username" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                                </div>
                                <div className=" items-center mt-6">
                                    <input id="username" placeholder="Password" className="p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none" />
                                </div>
                            </div>
                            <DialogFooter className='pb-2'>
                                <Button type="submit" className='mx-auto bg-white text-black font-bold rounded-3xl mt-8 py-6 w-full text-md'>Log in</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} className='flex items-center justify-center w-full p-2 text-zinc-400 text-sm md:pb-9 lg:pb-3'>© 2025 Beak.</div>
        </div>
    )
}
