"use client"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Search, BadgeCheck, CalendarDays } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import Link from 'next/link'
import BackButton from '@/components/backbutton'
import { useThemeStore } from '@/store/themeStore'
import { useEditProfile, useUserDetails } from '@/hooks/useUserDetails'
import { useParams, useRouter } from 'next/navigation'
import Loader from '@/components/loader'
import ProfileChirps from '@/components/profileChirps'
import ProfileLikes from '@/components/profileLikes'
import ProfileReposts from '@/components/profileReposts'
import { useFollow, useUnFollow } from '@/hooks/useFollow'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { LoginDialog, LoginDialogHandle } from '@/components/LoginDialog'

export default function Profile() {
    const [showChirps, setShowChirps] = useState(true);  //showing main tweets page, on refresh this always shows
    const [showLike, setShowLike] = useState(false);    // test for showing likes page
    const [showReplies, setShowReplies] = useState(false);     //showing retweets
    const [dateJoined, setDateJoined] = useState<Date>(new Date())
    const [chirpAmount, setChirpAmount] = useState(0)
    const [onHover, setOnHover] = useState(false)
    const [open, setOpen] = useState(false);
    const { theme, accent } = useThemeStore()
    const params = useParams()
    const slug = params.slug

    const router = useRouter()
    const auth = useAuthStore();

    const loggedInUser = useAuthStore((state) => state.user)
    // console.log(loggedInUser?.userId)

    const { data, isLoading, error } = useUserDetails(slug)

    const { mutate: followUser, isPending: pendingFollow } = useFollow()
    const { mutate: unFollowUser, isPending: pendingUnFollow } = useUnFollow()

    const { mutate: editProfile, isPending: pendingEdit } = useEditProfile(loggedInUser?.userId)

    const { mutate: logout, isPending: pendingLogout } = useLogout()

    const dialogRef = useRef<LoginDialogHandle>(null);

    // const [originalValues, setOriginalValues] = useState({
    //     fullname: '',
    //     username: '',
    //     bio: ''
    // });

    const { register, handleSubmit, formState: { errors: bioEditErrors }, reset } = useForm({
        defaultValues: {
            fullname: data?.fullname || '',
            username: data?.username || '',
            bio: data?.bio || ''
        }
    })

    const [serverError, setServerError] = useState<string | null>(null);
    const [serverErrorLogin, setServerErrorLogin] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            let date = new Date(data.datejoined);
            let finalDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
            setDateJoined(new Date(finalDate))
        }

        if (data) {
            const original = {
                fullname: data.fullname || '',
                username: data.username || '',
                bio: data.bio || ''
            };

            // setOriginalValues(original);
            reset(original);
        }
    }, [data, reset]);

    const likePage = () => {
        setShowLike(true);
        setShowChirps(false);
        setShowReplies(false);
    };

    const chirpsPage = () => {
        setShowLike(false);
        setShowChirps(true);
        setShowReplies(false);
    };

    const repliesPage = () => {
        setShowChirps(false);
        setShowLike(false);
        setShowReplies(true);
    };

    const postAmount = (amount: number) => {
        setChirpAmount(amount)
    }

    const handleUnfollow = (id: string) => {
        if (!loggedInUser?.loggedin) {
            dialogRef.current?.show('follow');
            return
        }

        if (pendingFollow || pendingUnFollow) return

        unFollowUser(id, {
            onError: (error: any) => {
                const status = error?.response?.status

                if (status === 401) {
                    auth.logout()
                    logout()
                } else {
                    toast("An error occured", {
                        style: {
                            background: 'red',
                            border: 'none',
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                }
            }
        })
    }

    const handleFollow = (id: string) => {
        if (!loggedInUser?.loggedin) {
            dialogRef.current?.show('follow');
            return
        }

        if (pendingFollow || pendingUnFollow) return

        followUser(id, {
            onError: (error: any) => {
                const status = error?.response?.status

                if (status === 401) {
                    auth.logout()
                    logout()
                } else {
                    toast("An error occured", {
                        style: {
                            background: 'red',
                            border: 'none',
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                }
            }
        })
    }

    const handleEditProfile = () => {
        setOpen(true)
    }

    const handleSendtoDb = (editData: any) => {
        //changing only values that are different from originals
        // const changes: { [key: string]: string } = {}; //putting the change values into one object
        // console.log(editData)

        // //detecting any changes
        // if (editData.fullname !== originalValues.fullname) {
        //     changes.fullname = editData.fullname;
        // }

        // if (editData.username !== originalValues.username) {
        //     changes.username = editData.username;
        // }

        // if (editData.bio !== originalValues.bio) {
        //     changes.bio = editData.bio;
        // }

        // if (Object.keys(changes).length === 0) {
        //     toast("Details are still the same", {
        //         style: {
        //             background: '#FFA500',
        //             border: 'none',
        //             textAlign: "center"
        //         }
        //     });
        //     return;
        // }

        // const updateData = {
        //     // id: data.id,
        //     ...changes
        // };
        console.log(editData)
        editProfile(editData, {
            onSuccess: () => {
                // auth.setUser(editData)
                toast("Your profile has been edited", {
                    style: {
                        background: accent,
                        border: 'none',
                        textAlign: "center",
                        justifyContent: "center"
                    }
                })
                setOpen(false)

                //small delay before routing to new profile page
                setTimeout(() => {
                    const newUsername = editData.username
                    router.push(`/profile/${newUsername}`)
                }, 100);

            },
            onError: (error: any) => {
                const status = error?.response?.status

                if (status === 401) {
                    auth.logout()
                    logout()
                } else {
                    toast("Error editing profile", {
                        style: {
                            background: 'red',
                            border: 'none',
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                }
            }
        })

    }

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex w-full max-w-7xl">
                <Navigation />

                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x  min-h-screen">
                    {isLoading ? <div className='mt-10'><Loader /></div> :
                        <div>
                            <div className="p-2 px-4  font-bold text-xl sticky top-0 z-10 " style={{ backgroundColor: 'rgba(var(--background-header), 0.63)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                                <div className='flex'>

                                    <BackButton />

                                    <div className='ml-1'>
                                        {error ? <div className='mt-2 ml-1'>Profile</div>
                                            :
                                            <div>
                                                <div className='flex'>
                                                    <div>{data?.fullname}</div>
                                                    <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1`} />
                                                </div>
                                                <div className='text-xs text-gray-500'>{chirpAmount || 0} {chirpAmount === 1 ? 'post' : 'posts'}</div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>

                            <div>
                                {error ? <div className='w-full h-[190px]' style={{ backgroundColor: 'rgb(51, 54, 57)' }}></div> :

                                    <Image alt="profile header"
                                        // src={header} 
                                        src={`https://picsum.photos/seed/${data?.username}/1600/800`}
                                        className='w-full h-[190px]'
                                        width={1600}
                                        height={800}
                                        quality={100}
                                        priority
                                        objectFit='cover'
                                    />
                                }


                                <div className='px-5'>
                                    <div className='flex w-full justify-between'>
                                        <Avatar className="mr-3 mt-3 h-30 w-30" style={{ marginTop: '-70px', backgroundColor: 'var(--background)' }}>
                                            {error ? null :
                                                <div>
                                                    <AvatarImage src={`https://robohash.org/${data?.username}.png?set=set5`} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </div>
                                            }

                                        </Avatar>

                                        {error ? null :
                                            <div className='flex mt-2 w-1/4 justify-between'>
                                                <Button className='rounded-full border-gray-500 border' style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}><Search ></Search></Button>

                                                {loggedInUser?.username === data?.username ?
                                                    <Button className='font-bold rounded-4xl cursor-pointer' onClick={handleEditProfile} style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>Edit Profile</Button>
                                                    :
                                                    data?.isFollowedByMe ?
                                                        onHover ?
                                                            <Button
                                                                className='font-bold rounded-4xl cursor-pointer'
                                                                onClick={() => handleUnfollow(data?.id)}
                                                                onPointerLeave={() => setOnHover(false)}
                                                                style={{ backgroundColor: 'var(--background)', color: 'red', border: '1px solid red' }}>
                                                                {pendingUnFollow ? <Loader /> : 'Unfollow'}
                                                            </Button>
                                                            :
                                                            <Button
                                                                className='font-bold rounded-4xl cursor-pointer'
                                                                onPointerEnter={() => setOnHover(true)}
                                                                onPointerLeave={() => setOnHover(false)}
                                                                style={{ backgroundColor: 'var(--background)', color: 'var(--button)', border: '1px solid var(--border)' }}>
                                                                {pendingUnFollow ? <Loader /> : 'Following'}
                                                            </Button>
                                                        :
                                                        <Button
                                                            className='font-bold rounded-4xl cursor-pointer'
                                                            onClick={() => handleFollow(data?.id)}
                                                            onPointerLeave={() => setOnHover(false)}
                                                            style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>
                                                            {pendingFollow ? <Loader /> : 'Follow'}
                                                        </Button>
                                                }

                                            </div>
                                        }
                                    </div>

                                    <Dialog open={open} onOpenChange={setOpen}>
                                        {/* <DialogTrigger asChild>
                                            <Button className='mx-9 mt-5 rounded-4xl py-5 px-31 text-blue-400 bg-black hover:bg-slate-800 border-gray-500 border font-bold hover:cursor-pointer'>Sign in</Button>
                                        </DialogTrigger> */}

                                        <DialogContent className="sm:max-w-[620px] px-20 rounded-2xl">
                                            <DialogHeader className=''>
                                                <DialogTitle className='mx-auto'>
                                                    Edit Profile
                                                </DialogTitle>

                                            </DialogHeader>
                                            <form onSubmit={handleSubmit(handleSendtoDb)}>
                                                <div className=" mx-auto w-full mt-5">
                                                    <div className=" items-center">
                                                        <input id="fullname"
                                                            // placeholder={data?.fullname}
                                                            {...register('fullname', {
                                                                required: 'Full name is required',
                                                                minLength: {
                                                                    value: 4,
                                                                    message: 'Too short! Need at least 4 characters',
                                                                },
                                                                maxLength: {
                                                                    value: 20,
                                                                    message: 'Full name cannot exceed 20 characters',
                                                                },
                                                                pattern: {
                                                                    value: /^[a-zA-Z0-9_ ]+$/,
                                                                    message: 'You input dangerous characters',
                                                                },
                                                            })}
                                                            className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none `}
                                                        // ${bioEditErrors.fullname && 'border-red-600 focus:border-red-500'}
                                                        />
                                                        {typeof bioEditErrors.fullname?.message === 'string' && (
                                                            <p className="text-red-500 text-sm mt-1">
                                                                {bioEditErrors.fullname.message}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className=" items-center  mt-6">
                                                        <input id="username"
                                                            {...register('username', {
                                                                required: 'Username is required',
                                                                minLength: {
                                                                    value: 4,
                                                                    message: 'Too short! Need at least 4 characters',
                                                                },
                                                                maxLength: {
                                                                    value: 20,
                                                                    message: 'Username cannot exceed 20 characters',
                                                                },
                                                                pattern: {
                                                                    value: /^[a-zA-Z0-9_ ]+$/,
                                                                    message: 'You input dangerous characters',
                                                                },
                                                                validate: {
                                                                    noSpaces: (value) => !value.includes(' ') || 'Username cannot contain spaces',
                                                                    notOnlyNumbers: (value) => !/^\d+$/.test(value) || 'Username cannot be only numbers'
                                                                }
                                                            })}
                                                            className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none `}
                                                        // ${loginErrors.email && 'border-red-600 focus:border-red-500'}
                                                        />
                                                        {typeof bioEditErrors.username?.message === 'string' && (
                                                            <p className="text-red-500 text-sm mt-1">
                                                                {bioEditErrors.username.message}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className=" items-center mt-6">
                                                        <input id="bio"
                                                            // placeholder="Bio"
                                                            className={`p-4 w-full col-span-3 border-1 border-zinc-700 rounded-sm focus:border-blue-500 outline-none `}
                                                            {...register('bio', {
                                                                required: 'Password is required',
                                                                minLength: {
                                                                    value: 4,
                                                                    message: 'Too short! Need at least 4 characters',
                                                                },
                                                                maxLength: {
                                                                    value: 160,
                                                                    message: 'Bio cannot exceed 160 characters',
                                                                },
                                                                pattern: {
                                                                    value: /^[a-zA-Z0-9\s_.!@#$%^&*(),-]+$/,
                                                                    message: 'You input dangerous characters',
                                                                },
                                                            })}
                                                        />
                                                        {typeof bioEditErrors.bio?.message === 'string' && (
                                                            <p className="text-red-500 text-sm mt-1">{bioEditErrors.bio.message}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-center text-red-500 text-md pt-10">
                                                    {serverErrorLogin}
                                                </p>

                                                <DialogFooter className='pb-2'>
                                                    {pendingEdit ?
                                                        <div className='mx-auto mt-19'>
                                                            <Loader />
                                                        </div>
                                                        :
                                                        <Button type="submit" className='mx-auto font-bold rounded-3xl mt-8 py-6 w-full text-md hover:cursor-pointer' style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>Save</Button>
                                                    }

                                                </DialogFooter>
                                            </form>
                                        </DialogContent>
                                    </Dialog>

                                    {error ? <div className='mt-4 font-bold text-xl'>@{slug} </div> :

                                        <div>
                                            <div className='flex mt-2'>
                                                <div className=' text-2xl font-bold'>{data?.fullname}</div>
                                                <div className='text-2xl font-bold'><BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1 ml-1`} /></div>
                                            </div>

                                            <div className='text-gray-500 text-md -mt-1'>@{data?.username}</div>

                                            <div className=' text-md mt-2'>{data?.bio}</div>

                                            <div className='flex mt-2'>
                                                <CalendarDays className='w-4 h-4 mt-2 mr-1 text-gray-500' />
                                                <div className='text-gray-500 text-md mt-1'> Joined {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(data?.datejoined))}</div>
                                            </div>

                                            <div className='flex w-full gap-4 mt-1'>
                                                <Link href={`/profile/${slug}/following`} className='flex hover:underline'>
                                                    <div className='text-md font-bold'>{data?.following}</div>
                                                    <div className='text-gray-500 text-md'>{" "}Following</div>
                                                </Link>
                                                <Link href={`/profile/${slug}/followers`} className='flex hover:underline'>
                                                    <div className='text-md font-bold'>{data?.followers}</div>
                                                    <div className='text-gray-500 text-md'>{" "}{data?.followers === 1 ? 'Follower' : 'Followers'}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    }



                                </div>

                                {error ? null :
                                    <div className='flex w-full justify-between border-b border-gray-700 p-4 px-12 font-bold text-gray-500 mt-3 transition-all duration-800 ease-in-out'>
                                        <div onClick={chirpsPage}
                                            className='cursor-pointer'
                                            style={{
                                                textDecoration: showChirps ? `underline ${accent} 3px` : 'none',
                                                textUnderlineOffset: showChirps ? '6px' : undefined,
                                            }}>Chirps</div>

                                        <div onClick={repliesPage}
                                            className='cursor-pointer'
                                            style={{
                                                textDecoration: showReplies ? `underline ${accent} 3px` : 'none',
                                                textUnderlineOffset: showReplies ? '6px' : undefined,
                                            }}>Reposts</div>

                                        <div
                                            // onClick={() => setActiveTab(true)}
                                            className='cursor-pointer'
                                            style={{
                                                // textDecoration: activeTab === 'highlights' ? `underline ${accent} 3px` : 'none',
                                                // textUnderlineOffset: activeTab === 'highlights' ? '6px' : undefined,
                                            }}>Highlights</div>

                                        {loggedInUser?.username === data?.username ?
                                            <div onClick={likePage}
                                                className='cursor-pointer'
                                                style={{
                                                    textDecoration: showLike ? `underline ${accent} 3px` : 'none',
                                                    textUnderlineOffset: showLike ? '6px' : undefined,
                                                }}>Likes</div>
                                            :
                                            null}

                                    </div>
                                }

                                {error ? <div>
                                    <div className='mt-24 font-bold text-4xl text-center'>This account doesn’t exist </div>
                                    <div className='text-gray-400 text-center'>Try searching for another.</div>
                                </div> :
                                    <div>
                                        {showChirps && <ProfileChirps userId={data?.id} fullname={data?.fullname} username={data?.username} sendToProfile={postAmount} />}
                                        {showReplies && <ProfileReposts userId={data?.id} />}
                                        {showLike && <ProfileLikes />}
                                    </div>
                                }

                            </div>
                        </div>
                    }
                </main>
                <LoginDialog ref={dialogRef} fullname={data?.fullname} />

                <Sidebar />
            </div>
        </div>
    )
}
