"use client"
import React from 'react'
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle } from "lucide-react"

export default function Interactive() {

    const handle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log(1 + 1)
    }

    return (
        <div className="mt-1 w-full flex justify-between px-1 pointer-events-auto" >
            {/* Comment  */}
            <div onClick={(e) => handle(e)} className="flex items-center cursor-pointer text-gray-400 hover:text-sky-500 group">
                <MessageCircle className=" p-1 w-7 h-6 group-hover:text-sky-500 group-hover:bg-sky-200/10 rounded-4xl px-1" style={{ marginTop: '3px' }} />
                <div className="text-sm mt-1 group-hover:text-sky-500">484</div>
            </div>

            {/* Repost  */}
            <div onClick={(e) => handle(e)} className="flex items-center cursor-pointer text-gray-400 hover:text-emerald-500 group">
                <Repeat2 className=" p-1 w-7 h-7 group-hover:text-emerald-500 group-hover:bg-emerald-200/10 rounded-4xl px-1" style={{ marginTop: '3px' }} />
                <div className="text-sm mt-1 group-hover:text-emerald-500">1.2K</div>
            </div>

            {/* Like */}
            <div onClick={(e) => handle(e)} className="flex items-center cursor-pointer text-gray-400 group ">
                <Heart className=" p-1 w-7 h-6 text-pink-600 fill-pink-600 group-hover:fill-pink-600 group-hover:text-pink-600 group-hover:bg-pink-200/10 rounded-4xl px-1" style={{ marginTop: '3px' }} />
                <div className="text-sm mt-1 group-hover:text-pink-600">12K</div>
            </div>

            {/* Other */}
            <div onClick={(e) => handle(e)} className="flex items-center cursor-pointer text-gray-400 group hover:bg-blue-200/10 rounded-xl px-1">
                <Upload className="p-1 w-6 h-6 group-hover:text-blue-500 group-hover:fill-blue-500" style={{ marginTop: '3px' }} />
            </div>
        </div>
    )
}
