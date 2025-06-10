'use client';

import { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, UserPlus } from "lucide-react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import beak from '@/public/beak.png'
import beak2 from '@/public/beak 2.png'
import { useThemeStore } from '@/store/themeStore'

export type LoginDialogHandle = {
    show: (context: string) => void;
};

interface DialogData {
    fullname: string
}


export const LoginDialog = forwardRef<LoginDialogHandle, DialogData>(({ fullname }, ref) => {
    const [open, setOpen] = useState(false);
    const [context, setContext] = useState<string>('');
    const router = useRouter()
    const pathname = usePathname();
    const { theme } = useThemeStore()


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
                                <Heart className={`w-16 h-16 fill-pink-600 text-pink-600 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                            </div>

                            <div className='text-2xl font-bold mt-8'>Like a post to share the love.</div>
                            <div className='text-gray-500 mt-1'>Join Beak. now to let {fullname} know that you like their post.</div>
                        </div>
                        : context === 'repost' ?
                            <div>
                                <div className=' flex items-center justify-center'>
                                    <Repeat2 className={`w-16 h-16 stroke-emerald-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                </div>

                                <div className='text-2xl font-bold mt-8'>Repost to spread the word.</div>
                                <div className='text-gray-500 mt-1'>When you join Beak., you can share {fullname}'s post with your followers.</div>
                            </div>
                            : context === 'comment' ?
                                <div>
                                    <div className=' flex items-center justify-center'>
                                        <MessageCircle className={`w-16 h-16 fill-sky-500 text-sky-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                    </div>

                                    <div className='text-2xl font-bold mt-8'>Reply to join the conversation.</div>
                                    <div className='text-gray-500 mt-1'>Once you join Beak., you can respond to {fullname}'s posts.</div>
                                </div>
                                :
                                context === 'follow' ?
                                    <div>
                                        <div className=' flex items-center justify-center'>
                                            <UserPlus className={`w-16 h-16 fill-sky-500 text-sky-500 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                                        </div>

                                        <div className='text-2xl font-bold mt-8'>Follow {fullname} to see what they share on Beak.</div>
                                        <div className='text-gray-500 mt-1'>Sign up so you never miss their posts.</div>
                                    </div>
                                    :
                                    <div>
                                        <div className=' flex items-center justify-center'>
                                            <Image alt='beak logo' src={theme === 'light' ? beak2 : beak} height={'40'} className='ml-2' />
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
