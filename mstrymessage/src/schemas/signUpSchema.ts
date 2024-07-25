import {z} from 'zod'

//When user signUp ,we will check user validation
export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 charaters")
    .max(20, "Username nust be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+4/, "Username must not contain special character")


//Similarly we will check for email,password validation
export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})
})