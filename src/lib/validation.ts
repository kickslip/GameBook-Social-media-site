import {z} from "zod"

const requiredString = z.string().trim().min(1, "Required")

// Signup Form Validation

export const signUpSchema = z.object({
    email: requiredString.email("Invalid Email"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Only letters, numbers, - and _ allowed"
    ),
    password: requiredString.min(8, "Password must be 8 characters or more")
})

export type SignUpValues = z.infer<typeof signUpSchema>

// Login Form Validation

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString
})

export type LoginValues = z.infer<typeof loginSchema>

// create Post Schema

export const createPostSchema = z.object({
    content: requiredString
})