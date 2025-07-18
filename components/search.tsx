"use client"
import React, { useState } from 'react'
import { validateSearch } from '@/functions/validate'
import { useThemeStore } from '@/store/themeStore'
import { useRouter } from 'next/navigation'
import { toast } from "sonner"

interface defaults {
    defaultQuery: string
}

export default function SearchBar({ defaultQuery }: defaults) {

    const { accent } = useThemeStore()

    const [isFocused, setIsFocused] = useState(false)
    const [query, setQuery] = useState('');
    const [searchError, setSearchError] = useState(false)
    const router = useRouter()

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


        if (query.startsWith('#')) {
            const hashtag = query.slice(1)
            router.push(`/search?q=%23${hashtag}`)

        } else {
            router.push(`/search?q=${query}`)

        }
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
            defaultValue={defaultQuery ? defaultQuery : ''}
            className="px-6 py-2 w-full rounded-4xl  border  outline-none" style={{ border: `2px solid ${searchError ? '#f00' : isFocused ? accent : '#ccc'}`, }} placeholder="Search"
        />

    )
}
