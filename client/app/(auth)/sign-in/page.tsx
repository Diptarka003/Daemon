"use client"
import React from 'react'
import { LoginForm } from '@/components/login-form'
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@/components/ui/spinner';
const page = () => {
    const { data, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Spinner />
            </div>
        );
    }

    if (data?.session && data?.user) {
        router.push("/");
    }

  return (
    <LoginForm/>
  )
}

export default page