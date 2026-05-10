import { Button } from '@/components/ui/button'
import React from 'react'
import {prisma} from "@/lib/db"

const Page =async() => {
    const user = await prisma.user.findMany()
    return (
       <div>
        <h1 className='text-2xl font-bold'>Hello World</h1>
        <Button>Click Me</Button>
        <pre>{JSON.stringify(user)}</pre>
       </div>
    )
}
export default Page
