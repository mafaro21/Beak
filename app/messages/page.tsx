"use client"
import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MailPlus, Search } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogOverlay
} from "@/components/ui/dialog"
import { validateSearch } from '@/functions/validate'
import { useSearchUser } from '@/hooks/useSearchUser'
import { toast } from "sonner"
import Loader from '@/components/loader'

export default function Messages() {

    const { accent, theme } = useThemeStore()
    const [open, setOpen] = useState(false);
    const [searchError, setSearchError] = useState(false)
    const [query, setQuery] = useState('');

    const { data, isLoading, error, refetch } = useSearchUser(query, { enabled: false })
    // console.log(data)

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // optional, prevents form submission if inside a form
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (query.length < 4) {
            setSearchError(true)
            toast("Search query is too short", {
                style: {
                    background: 'red',
                    border: 'none',
                    color: 'white',
                    textAlign: "center",
                    justifyContent: "center"
                }
            })
            return
        }

        const error = validateSearch(query)
        if (error) {
            console.log('Error: ', error)
            return
        }


        refetch()
    };

    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    <main className="w-full xs:w-full sm:w-[430px] md:w-[430px] lg:w-[360px] xl:w-[460px] border overflow-y-auto">
                        <div className=" sticky top-0 z-10  " >
                            <div className='flex w-full justify-between p-2'>

                                <div className='font-bold text-lg p-2'>Messages</div>
                                <div className='justify-end p-2 rounded-4xl link cursor-pointer' onClick={() => setOpen(true)}><MailPlus /></div>
                            </div>

                            <div className='hover:bg-gray-600 link cursor-pointer'>
                                <div className='flex px-4 py-2'>
                                    <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                        <AvatarImage src={`https://robohash.org/mafaro65.png?set=set5`} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex'>
                                            <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>item.fullname</span> <span className='text-gray-500'>@item.username · Jan 28, 2023</span></div>
                                        </div>
                                        <div className='text-gray-500 text-sm'>@item.username</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Dialog open={open} onOpenChange={setOpen} >

                        <DialogOverlay className="fixed inset-0 bg-[rgba(111,177,250,0.3)]" />
                        <DialogContent className="sm:max-w-[620px] rounded-2xl">
                            <DialogHeader className=''>
                                <DialogTitle className='mx-auto'>
                                    New Message
                                </DialogTitle>
                            </DialogHeader>

                            <div className='w-full flex space-x-3 border-b pb-2 pt-2'>
                                <div><Search /></div>

                                <div className='w-full'>
                                    <input
                                        onChange={(e) => setQuery(e.target.value)}
                                        className='outline-none w-full px-2'
                                        placeholder='Search people'
                                        onKeyDown={handleEnter}
                                    />
                                </div>
                            </div>

                            {!data ?
                                <div className='hover:bg-gray-600 link cursor-pointer rounded-lg'>
                                    <div className='flex py-2'>
                                        <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                            <AvatarImage src={`https://robohash.org/mafaro65.png?set=set5`} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className=''>
                                            <div className='flex'>
                                                <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>item.fullname</span></div>
                                            </div>
                                            <div className='text-gray-500 text-sm'>@item.username</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                isLoading ? <Loader /> :
                                    data?.map((item: any) => (
                                        <div className='hover:bg-gray-600 link cursor-pointer rounded-lg' key={item.id}>
                                            <div className='flex py-2'>
                                                <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                                    <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className=''>
                                                    <div className='flex'>
                                                        <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>{item.fullname}</span></div>
                                                    </div>
                                                    <div className='text-gray-500 text-sm'>@{item.username}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                            }


                        </DialogContent>
                    </Dialog>

                    <main className="hidden lg:block xl:w-[520px] lg:w-[420px] border-r overflow-y-auto">
                        <div className='justify-center px-30 pt-60 '>
                            <div className='text-2xl font-bold'>Select a message</div>
                            <div className='text-xs text-gray-500'>Choose from your existing conversations, start a new one, or just keep swimming.</div>

                            <Button className='rounded-4xl mt-6 cursor-pointer' style={{ backgroundColor: accent }} onClick={() => setOpen(true)}>New Message</Button>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}
