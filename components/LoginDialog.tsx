'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle } from "lucide-react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import beak from '@/public/beak.png'

export type LoginDialogHandle = {
    show: (context: string) => void;
};

type ShowOptions = {
    type: string
}

export const LoginDialog = forwardRef<LoginDialogHandle>((_, ref) => {
    const [open, setOpen] = useState(false);
    const [context, setContext] = useState<string>('');
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // console.log(pathname)
    // const redirectPath = pathname + '?' + searchParams.toString()

    useImperativeHandle(ref, () => ({
        show: (ctx: string) => {
            setContext(ctx);
            setOpen(true);
        },
    }));

    const handleRouting = (e: any) => {
        e.stopPropagation()
        e.preventDefault()

        router.push(`/login?redirect=${pathname}`)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent>

                <div className='p-6 text-center px-14'>
                    {context === 'like' ?
                        <div>
                            <div className=' flex items-center justify-center'>
                                <Heart className={`fill-pink-600 text-pink-600 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                            </div>

                            <div className='text-2xl font-bold mt-8'>Like a post to share the love.</div>
                            <div className='text-gray-500 mt-1'>Join Beak. now to let other users know that you like their post.</div>
                        </div>
                        : context === 'repost' ?
                            <div>
                                <div className=' flex items-center justify-center'>
                                    <Repeat2 className={`stroke-emerald-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                </div>

                                <div className='text-2xl font-bold mt-8'>Repost to spread the word.</div>
                                <div className='text-gray-500 mt-1'>When you join Beak., you can share other users post with your followers.</div>
                            </div>
                            : context === 'comment' ?
                                <div>
                                    <div className=' flex items-center justify-center'>
                                        <MessageCircle className={`fill-sky-500 text-sky-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                    </div>

                                    <div className='text-2xl font-bold mt-8'>Reply to join the conversation.</div>
                                    <div className='text-gray-500 mt-1'>Once you join Beak., you can respond to other users posts.</div>
                                </div>
                                :
                                <div>
                                    <div className=' flex items-center justify-center'>
                                        <Image alt='beak logo' src={beak} height={'40'} className='ml-2 bg-black rounded-4xl' />
                                    </div>

                                    <div className='text-2xl font-bold mt-8'>Don’t miss what’s happening</div>
                                    <div className='text-gray-500 mt-1'>People on Beak. are the first to know.</div>
                                </div>
                    }


                    <Button className='bg-blue-400 text-white rounded-4xl w-full p-7 cursor-pointer mt-8' onClick={(e) => handleRouting(e)}>Log In</Button>

                </div>
            </DialogContent>
        </Dialog>
    );
});

LoginDialog.displayName = 'LoginDialog';
