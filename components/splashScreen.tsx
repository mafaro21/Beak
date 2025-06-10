// components/SplashScreen.tsx
'use client';
import beak from '@/public/beak.png'
import beak2 from '@/public/beak 2.png'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useThemeStore } from '@/store/themeStore'

export default function SplashScreen() {
    const [visible, setVisible] = useState(true);
    const { theme } = useThemeStore()

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1900); // Duration of splash screen in ms

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-100">
            {/* <img src="/logo.svg" alt="Logo" className="w-16 h-16 animate-fadeIn" /> */}
            <Image alt='beak logo' src={theme === 'light' ? beak2 : beak} className='w-28 h-28 ' />
        </div>
    );
}
