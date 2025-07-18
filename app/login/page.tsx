"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Image from 'next/image'
import sidePic from '../../public/img/mar.jpg'
import bird from '../../public/img/bird.jpg'
import bird2 from '../../public/img/bird2.jpg'
import bird3 from '../../public/img/bird3.jpg'
import bird4 from '../../public/img/bird4.jpg'
import bird5 from '../../public/img/bird5.jpg'
import bird6 from '../../public/img/bird6.jpg'
import bird7 from '../../public/img/bird7.jpg'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import beak from '@/public/beak.png'
import { useRegister } from '@/hooks/useRegister'
import { useLogin } from '@/hooks/useLogin'
import Loader from '@/components/loader'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthStore } from '@/store/authStore';

export default function login() {

    const {
        register: registerRegister,
        handleSubmit: handleRegisterSubmit,
        watch: watchRegister,
        formState: { errors: registerErrors },
    } = useForm()

    const {
        register: registerLogin,
        handleSubmit: handleLoginSubmit,
        watch: watchLogin,
        formState: { errors: loginErrors },
    } = useForm()

    const { mutate: registerMutate, isPending: registerPending, error: registerError } = useRegister();
    const { mutate: loginMutate, isPending: loginPending, error: loginError } = useLogin();

    const password = watchRegister('password')
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/'

    const router = useRouter()
    const auth = useAuthStore();

    const [serverError, setServerError] = useState<string | null>(null);
    const [serverErrorLogin, setServerErrorLogin] = useState<string | null>(null);

    const onSubmitLogin = (data: any) => {
        setServerErrorLogin(null);

        console.log(data)
        loginMutate(data, {
            onSuccess: (data) => {
                auth.setUser(data)
                if (redirectTo) {
                    router.push(redirectTo)
                } else {
                    router.push('/home')
                }
            },
            onError: (error: any) => {
                setServerErrorLogin(error.message);
            }
        })
    }
    const onSubmitRegister = (data: any) => {
        setServerError(null);

        registerMutate(data, {
            onSuccess: (data) => {
                console.log(data)
                router.push('/home')
            },
            onError: (error: any) => {
                setServerError(error.message);
            }
        })
    }

    const loginImg = [
        bird, bird2, bird3, bird4, bird5, bird6, bird7
    ]

    const randomIndex = Math.floor(Math.random() * loginImg.length);
    const randomImage = loginImg[randomIndex];

    return (
        <div className='bg-black text-white min-h-screen flex'>
            <div className='w-3/5 ml-auto hidden lg:block'>
                <Image src={randomImage} alt='main picture' className=' max-h-screen lg:w-lg  mx-auto' />
            </div>

            <div className='lg:w-2/5 md:w-full '>
                <div className="text-5xl font-bold px-9 mt-7 xs:hidden  sm:hidden md:block lg:hidden">
                    <Image alt='beak logo' src={beak} height={'50'} className='' />
                </div>

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

                    <DialogContent className="sm:max-w-[620px] md:px-20 px-0 bg-black text-white  rounded-2xl">
                        <DialogHeader className=''>
                            <DialogTitle className='mx-auto'>
                                <div className="text-4xl " style={{ marginTop: '-15px' }}>
                                    <Image alt='beak logo' src={beak} height={'40'} className='' />
                                </div>
                            </DialogTitle>

                            <DialogTitle className='pt-6 text-3xl font-bold'>Create your account</DialogTitle>
                        </DialogHeader>

                        <form onSubmit={handleRegisterSubmit(onSubmitRegister)}>
                            <div className=" mx-auto w-full mt-5">
                                <div className=" items-center">
                                    <input id="name"
                                        placeholder="Full Name"
                                        {...registerRegister('fullname', {
                                            required: 'Full name is required 🤔',
                                            minLength: {
                                                value: 4,
                                                message: 'Too short! Need at least 4 characters',
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_ ]+$/,
                                                message: 'You input dangerous characters',
                                            },
                                        })}
                                        // aria-invalid={errors.name ? "true" : "false"}
                                        className={`p-4 w-full col-span-3 border-1  ${registerErrors.fullname ? 'border-red-600 focus:border-red-500' : 'border-zinc-700'} rounded-sm focus:border-blue-500 outline-none`} />

                                    {typeof registerErrors.fullname?.message === 'string' &&
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.fullname.message}
                                        </p>
                                    }
                                </div>
                                <div className=" items-center mt-6">
                                    <input id="email"
                                        placeholder="Email"
                                        {...registerRegister('email', {
                                            required: 'Email is a must 📧',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'That doesn’t look like a valid email 😬',
                                            },
                                        })}
                                        className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none ${registerErrors.email && 'border-red-600 focus:border-red-500'}`}
                                    />

                                    {typeof registerErrors.email?.message === 'string' && (
                                        <p className="text-red-500 text-sm mt-1">{registerErrors.email.message}</p>
                                    )}
                                </div>
                                <div className=" items-center mt-6">
                                    <input id="password"
                                        placeholder="Password"
                                        type='password'
                                        {...registerRegister('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 4,
                                                message: 'Too short! Need at least 4 characters',
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_]+$/,
                                                message: 'You input dangerous characters',
                                            },
                                        })}
                                        className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none ${registerErrors.password && 'border-red-600 focus:border-red-500'}`} />

                                    {typeof registerErrors.password?.message === 'string' && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.password.message}
                                        </p>
                                    )}
                                </div>
                                <div className=" items-center mt-6">
                                    <input id="repassword"
                                        placeholder="Re-type Password"
                                        type='password'
                                        {...registerRegister('rePassword', {
                                            required: 'Username is required 🤔',
                                            validate: (value) =>
                                                value === password || "Passwords do not match",
                                            minLength: {
                                                value: 4,
                                                message: 'Too short! Need at least 4 characters',
                                            },
                                            pattern: {
                                                value: /^[a-zA-Z0-9_]+$/,
                                                message: 'You input dangerous characters',
                                            },
                                        })}
                                        className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none ${registerErrors.rePassword && 'border-red-600 focus:border-red-500'}`} />

                                    {typeof registerErrors.rePassword?.message === 'string' && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.rePassword.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <p className="text-center text-red-500 text-md pt-10">
                                {serverError}
                            </p>

                            <DialogFooter className='pb-2'>
                                {registerPending ?
                                    <div className='mx-auto mt-10'>
                                        <Loader />
                                    </div>
                                    :
                                    <Button type="submit" className='mx-auto bg-white text-black font-bold rounded-3xl mt-10 py-6 w-full text-md hover:cursor-pointer'>Join the nest</Button>
                                }

                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className='text-xs text-gray-500 px-9 mt-1'>By signing up, you agree to the Terms of Service and Privacy <br /> Policy, including Cookie Use.</div>

                <div className='lg:mt-40 md:mt-13 mt-40'>
                    <div className='px-9 text-xl font-bold'>Already have an account?</div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='mx-9 mt-5 rounded-4xl py-5 px-31 text-blue-400 bg-black hover:bg-slate-800 border-gray-500 border font-bold hover:cursor-pointer'>Sign in</Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[620px] md:px-30 px-0 bg-black text-white  rounded-2xl">
                            <DialogHeader className=''>
                                <DialogTitle className='mx-auto'>
                                    <div className="text-4xl " style={{ marginTop: '-15px' }}>
                                        <Image alt='beak logo' src={beak} height={'40'} className='' />
                                    </div>
                                </DialogTitle>

                                <DialogTitle className='pt-6 text-3xl font-bold'>Sign in to Beak.</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleLoginSubmit(onSubmitLogin)}>
                                <div className=" mx-auto w-full mt-5">
                                    <div className=" items-center">
                                        <input id="email"
                                            placeholder="Email"
                                            {...registerLogin('email', {
                                                required: 'Email is a must 📧',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'That doesn’t look like a valid email 😬',
                                                },
                                            })}
                                            className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none ${loginErrors.email && 'border-red-600 focus:border-red-500'}`}
                                        />
                                        {typeof loginErrors.email?.message === 'string' && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {loginErrors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className=" items-center mt-6">
                                        <input id="username"
                                            placeholder="Password"
                                            type='password'
                                            className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none ${loginErrors.password && 'border-red-600 focus:border-red-500'}`}
                                            {...registerLogin('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 4,
                                                    message: 'Too short! Need at least 4 characters',
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z0-9_]+$/,
                                                    message: 'You input dangerous characters',
                                                },
                                            })}
                                        />
                                        {typeof loginErrors.password?.message === 'string' && (
                                            <p className="text-red-500 text-sm mt-1">{loginErrors.password.message}</p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-center text-red-500 text-md pt-10">
                                    {serverErrorLogin}
                                </p>

                                <DialogFooter className='pb-2'>
                                    {loginPending ?
                                        <div className='mx-auto mt-19'>
                                            <Loader />
                                        </div>
                                        :
                                        <Button type="submit" className='mx-auto bg-white text-black font-bold rounded-3xl mt-8 py-6 w-full text-md hover:cursor-pointer'>Log in</Button>
                                    }

                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }} className='flex items-center justify-center w-full p-2 text-zinc-400 text-sm md:pb-9 lg:pb-3'>
                <div className='flex space-x-4'>
                    <div>© 2025 Beak.</div>
                    <div>v1</div>
                </div>
            </div>
        </div>
    )
}
