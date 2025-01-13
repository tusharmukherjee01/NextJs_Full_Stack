import {z} from 'zod'

export const messageSchema = z.object({
   content:z.string().min(10,{message:"content must be at least 10 chracter"})
   .max(300,{message:"content must be less than 10 chracter"})
})