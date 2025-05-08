import React from 'react'
import { Loader2 } from 'lucide-react'
import { useThemeStore } from '@/store/themeStore'


export default function Loader() {
    const { accent } = useThemeStore()

    return (
        <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" style={{ color: `${accent}` }} />
        </div>
    )
}
