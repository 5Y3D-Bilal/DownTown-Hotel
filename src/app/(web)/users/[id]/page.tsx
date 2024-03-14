'use client'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { getUserBooking } from '@/libs/apis';
import { User } from '@/models/user';
import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { signOut } from "next-auth/react"
import Loading from '../../loading';

export default function UserDetails(props: { params: { id: string } }) {
    // Getting User Id from params
    const { params: { id: userId } } = props

    // Fetching Data
    const fetchUserBooking = async () => getUserBooking(userId)
    const fetchUserData = async () => {
        const { data } = await axios.get<User>('/api/users')
        return data;
    }

    // Getting Data
    const { data: userBookings, error, isLoading } = useSWR('/api/userbooking', fetchUserBooking)
    const { data: UserData, error: errorUserData, isLoading: loadingUserData } = useSWR('/api/users', fetchUserData)

    if (error || errorUserData) throw new Error("Failed to load");
    if (typeof userBookings === "undefined" && !isLoading) throw new Error("Failed to load");
    if (typeof UserData === "undefined" && !loadingUserData) throw new Error("Failed to load");

    if (isLoading) return <Loading />
    if (loadingUserData) return <Loading />

    console.log(UserData)
    console.log(userBookings)


    return (
        <>
            {/* Header Component */}
            <Header />
            {/* User Page */}
            <div className='container mx-auto px-2 md:px-4 py-10'>
                <div className='grid md:grid-cols-12 gap-10'>
                    <div className='hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4'>
                        <div className='md:w-[143px] w-38 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden'>
                            <img src={UserData?.image} alt={UserData?.name} className='
                            w-[143px] h-[143px] img scale-animation rounded-full' />
                        </div>
                        <div className='font-normal py-4 text-left'>
                            <h6 className='text-xl font-bold pb-3'>About</h6>
                            <p className='text-sm'>{UserData?.about ?? ''}</p>
                        </div>
                        <div className='font-normal text-left'>
                            <h6 className='text-xl font-bold pb-3'>{UserData?.name}</h6>
                        </div>
                        <div className='flex items-center'>
                            <button className="Btn" onClick={() => signOut({ callbackUrl: '/auth' })}>
                                <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                <div className="text">Logout</div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Component */}
            <Footer />
        </>
    )
}
