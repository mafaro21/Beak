"use client"
import React, { useState } from 'react'
import { validateSearch } from '@/functions/validate'
import { useThemeStore } from '@/store/themeStore'

export default function SearchBar() {

    const { accent } = useThemeStore()

    const [isFocused, setIsFocused] = useState(false)
    const [query, setQuery] = useState('');

    const handleSearch = () => {

        const error = validateSearch(query)
        if (error) {
            console.log('Error: ', error)
            return
        }

        console.log(query)
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // optional, prevents form submission if inside a form
            handleSearch();
        }
    };

    return (
        <input
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleEnter}
            className="px-6 py-2 w-full rounded-4xl  border focus:border-blue-500 outline-none" style={{ border: `2px solid ${isFocused ? accent : '#ccc'}`, }} placeholder="Search"
        />
    )
}
