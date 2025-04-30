"use client"
import React, { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore';

export default function ThemeInitializer() {

    const { theme, accent } = useThemeStore();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.setProperty('--accent-color', accent);
    }, [theme, accent]);

    return (
        null
    )
}
