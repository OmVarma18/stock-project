import { connectToDatabase } from '@/database/mongoose';
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import {nextCookies} from "better-auth/next-js";
import {betterAuth} from 'better-auth';

let authInstance:ReturnType<typeof betterAuth>|null=null;


export const getAuth=async()=>{
    if (authInstance)
        return authInstance; 
    
    const mongoose=await connectToDatabase();
    const db=mongoose.connection.db;
}