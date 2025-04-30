// store/authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    username: string;
    // email: string;
  }

interface AuthState {
  user: string | null;
  setUser: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
      (set) => ({
        user: null,
        // token: null,
        setUser: (user) => set({ user}),
        logout: () => set({ user: null}),
      }),
      {
        name: 'auth-storage', // storage key
      }
    )
  );
