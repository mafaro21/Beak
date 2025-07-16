// store/authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    fullname: string;
    username: string;
    loggedin: boolean
  }

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
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
