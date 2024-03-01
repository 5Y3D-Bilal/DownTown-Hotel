"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { signUp } from "next-auth-sanity/client"
import { signIn, useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';



export default function Auth() {
    // Initial form date State
    const DefaultFormData_forInitialStateofuseState = {
        email: '',
        name: '',
        password: ''
    }

    const inputStyling: string = 'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'

    // For Date 
    const [formData, setFormData] = useState(DefaultFormData_forInitialStateofuseState)

    // handle Input Function
    const handleInput_onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push('/')
    }, [router, session])


    // Login Function
    const loginhandler = async () => {
        try {
            await signIn()
            // If we got valid details just navigate our user to the home page
            router.push('/')
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }
    }

    //  Submit Form Data to Server
    const handleSubmit_ForInputData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const user = await signUp(formData)
            if (user) {
                toast.success("Success. Please Login now!")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something  went wrong! Try again later.")
        } finally {
            setFormData(DefaultFormData_forInitialStateofuseState)
        }
    }

    return (
        <section className='container mx-auto min-h-screen flex justify-center items-center'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an account</h1>
                    <p>or</p>
                    <span className='inline-flex items-center'>
                        <AiFillGithub onClick={loginhandler} className='mr-3 text-4xl cursor-pointer text-black dark:text-white' />
                        <hr className='w-0.5 bg-black h-7 dark:bg-white' />
                        <FcGoogle onClick={loginhandler} className='ml-3 text-4xl cursor-pointer' />
                    </span>
                </div>

                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit_ForInputData}>
                    {/* Input Fields */}
                    <input type="email"
                        name='email'
                        placeholder="example@gmail.com"
                        required
                        className={inputStyling}
                        value={formData.email}
                        onChange={handleInput_onChange}
                    />
                    <input
                        type="text"
                        name='name'
                        placeholder="name"
                        required
                        className={inputStyling}
                        value={formData.name}
                        onChange={handleInput_onChange}
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="*******"
                        required minLength={6}
                        className={inputStyling}
                        value={formData.password}
                        onChange={handleInput_onChange}
                    />
                    {/* Sign Up Btn */}
                    <button type='submit'
                        className='w-full bg-tertiary-light focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
                </form>

                <button className='text-blue-700 underline' onClick={loginhandler}>Login</button>
            </div>
        </section>
    )

}