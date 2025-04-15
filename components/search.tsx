"use client"
import React, { useState } from 'react'

export default function SearchBar() {
    let currentAccent = localStorage.getItem("accent") as string || 'rgb(29, 155, 240)'
    const [isFocused, setIsFocused] = useState(false)
    return (
        <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="px-6 py-2 w-full rounded-4xl  border focus:border-blue-500 outline-none" style={{ border: `2px solid ${isFocused ? currentAccent : '#ccc'}`, }} placeholder="Search" />
    )
}
