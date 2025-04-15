"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"


export default function BackButton() {
    const router = useRouter();
    return (
        <div className='pr-3 mt-2'>

            <div className='p-1 link hover:cursor-pointer rounded-4xl' onClick={() => router.back()}><ArrowLeft /></div>
        </div>
    )
}
