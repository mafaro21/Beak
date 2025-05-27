'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle } from "lucide-react"
import { useRouter } from 'next/navigation'
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

    useImperativeHandle(ref, () => ({
        show: (ctx: string) => {
            setContext(ctx);
            setOpen(true);
        },
    }));

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle></DialogTitle>
            <DialogContent>

                <div className='p-6 text-center px-14'>
                    {context === 'like' ?
                        <div>
                            <div className=' flex items-center justify-center'>
                                <Heart className={`p-1 w-12 h-12 fill-pink-600 text-pink-600 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                            </div>

                            <div className='text-2xl font-bold mt-8'>Like a post to share the love.</div>
                            <div className='text-gray-500 mt-1'>Join Beak. now to let other users know that you like their post.</div>
                        </div>
                        : context === 'repost' ?
                            <div>
                                <div className=' flex items-center justify-center'>
                                    <Repeat2 className={`p-1 w-12 h-12 stroke-emerald-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                </div>

                                <div className='text-2xl font-bold mt-8'>Repost to spread the word.</div>
                                <div className='text-gray-500 mt-1'>When you join Beak., you can share other users post with your followers.</div>
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


                    <Button className='bg-blue-400 text-white rounded-4xl w-full p-7 cursor-pointer mt-8' onClick={() => router.push('/login')}>Log In</Button>

                </div>
            </DialogContent>
        </Dialog>
    );
});

LoginDialog.displayName = 'LoginDialog';
