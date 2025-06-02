"use client"
import { useEffect } from "react";
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()
  const loggedInUser = useAuthStore((state) => state.user)

  useEffect(() => {
    if (!loggedInUser) {
      router.push('/login')
    } else {
      router.push('/home')
    }
  }, [loggedInUser]);

  return (
    <></>
  );
}
