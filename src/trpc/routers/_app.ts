import { z } from 'zod';
import {baseProcedure, createTRPCRouter, protectedProcedure} from '../init';
import {prisma} from "@/lib/db";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {TRPCError} from "@trpc/server";
import {inngest} from "@/inngest/client";

export const appRouter = createTRPCRouter({
    getWorkflow: protectedProcedure.query(() => {
        return prisma.workflow.findMany();
    }),
    createWorkflow: protectedProcedure.mutation(async() => {
        await inngest.send({
            name:'test/hello.world',
            data:{
                email:"ankityadav@mail.com"
            }
        })
        return {success: true , message:"Hello World"}
    })
});

// export type definition of API
export type AppRouter = typeof appRouter;









// baseProcedure.use(async({ctx , next}) =>{
//     const session = await auth.api.getSession({
//         headers:await headers()
//     })
//
//     if(!session){
//         throw new TRPCError({
//             code:"UNAUTHORIZED",
//             message:"Unauthorized"
//         })
//         return next({ctx : {...ctx , auth: session}})
//     }
// }))