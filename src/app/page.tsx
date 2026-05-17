"use client"
import {requireAuth} from "@/lib/auth-utils";
import {caller} from "@/trpc/server";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";
import {Button} from '@/components/ui/button'
import {toast} from "sonner";


const Page = () => {

const trpc = useTRPC();
const queryClient = useQueryClient();
const {data} = useQuery(trpc.getWorkflow.queryOptions())
    const create  = useMutation(trpc.createWorkflow.mutationOptions({
        onSuccess:() => {
            toast.success('Job Queued')
        }
    }))
    return (
       <div className={'min-h-screen min-w-screen flex items-center justify-center'}>
           {JSON.stringify(data)}

           Protect Server Components
           <Button disabled={create.isPending} onClick={() => create.mutate()}>
               Create workflow
           </Button>
       </div>
    )
}
export default Page
