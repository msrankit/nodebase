import LoginForm from '@/features/auth/components/login-form'
import { requireUnauth } from '@/lib/auth-utils'
import React from 'react'
import Link from "next/link";
import Image from 'next/image'


const Page = async() => {
    await requireUnauth()
    return <LoginForm />
}
export default Page
