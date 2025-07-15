"use client"
import { useEffect } from "react";
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation';
import { useCheckStatus } from "@/hooks/useLogin";


export default function Home() {
  const router = useRouter()
  const { data, isLoading, error } = useCheckStatus()
  // console.log(data)

  useEffect(() => {
    if (isLoading) return;

    if (data?.loggedin) {
      router.push('/home')
    } else {
      router.push('/login')
    }
  }, [data]);

  return (
    <></>
  );
}
