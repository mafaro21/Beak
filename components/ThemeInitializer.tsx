"use client"
import React, { useEffect } from 'react'

export default function ThemeInitializer() {

    useEffect(() => {
        // Check & set default theme
        // const theme = localStorage.getItem('theme') || 'dark';
        // const accent = localStorage.getItem('accent') || 'rgba(29, 155, 240)';

        if (typeof window === 'undefined') return;

        // Save to localStorage if not already there
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', "dark");
        }

        if (!localStorage.getItem('accent')) {
            localStorage.setItem('accent', 'rgba(29, 155, 240)');
        }

        // Apply theme to HTML
        document.documentElement.setAttribute('data-theme', "dark");
        document.documentElement.style.setProperty('accent-theme', 'rgba(29, 155, 240)');
    }, []);

    return (
        null
    )
}
