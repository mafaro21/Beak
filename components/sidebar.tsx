import React from 'react'

export default function Sidebar() {
    return (
        <aside className="xl:w-[360px] md:w-[300px] lg:w-[300px] px-1 pt-2 hidden lg:block pr-2">
            <div className="space-y-4 sticky top-0">
                <input className="px-6 py-2 w-full rounded-2xl border-zinc-800 border focus:border-blue-500 outline-none" placeholder="Search" />

                <div className="p-4 rounded-xl border border-zinc-800 font-bold">What's Happening</div>

                <div className="p-4 rounded-xl border border-zinc-800 font-bold">Who to follow</div>

                <div className="px-3 text-zinc-500 text-xs">© 2025 Beak.</div>

            </div>
        </aside>
    )
}
