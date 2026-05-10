import { Button } from '@/components/ui/button'
import React from 'react'
import {prisma} from "@/lib/db"
import {caller, getQueryClient, trpc} from "@/trpc/server";
import Client from "@/app/Client";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {Suspense} from 'react'

const Page =async() => {
    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
    return (
       <div>
        <h1 className='text-2xl font-bold'>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<p>Loading...</p>}>
            <Client/>
                </Suspense>
            </HydrationBoundary>
        </h1>


       </div>
    )
}
export default Page
