import { z } from 'zod';
import {baseProcedure, createTRPCRouter, protectedProcedure} from '../init';
import {prisma} from "@/lib/db";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {TRPCError} from "@trpc/server";

export const appRouter = createTRPCRouter({
    getUsers: protectedProcedure.query(({ctx}) => {


        console.log({userId:ctx.auth.user.id})
            return prisma.user.findMany();
        }),
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