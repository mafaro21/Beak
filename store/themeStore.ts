// stores/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark' | 'dim';
  accent: string;
  setTheme: (theme: 'light' | 'dark' | 'dim') => void;
  setAccent: (accent: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark', // default theme
      accent: 'rgba(29,161,242,1.00)', // default accent (Twitter blue)
      setTheme: (theme) => set({ theme }),
      setAccent: (accent) => set({ accent }),
    }),
    {
      name: 'theme-storage', // key in localStorage
    }
  )
);
