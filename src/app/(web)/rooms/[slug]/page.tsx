'use client'

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { getRoom } from "@/libs/apis"
import useSWR from "swr"
import Loading from "../../loading"
import Loader from "@/components/SpinnerLoader/Loader"
import HotelPhotoGallery from "@/components/HotelPhotoGallery/HotelPhotoGallery"

export default function RoomDetails(props: { params: { slug: string } }) {
    const { params: { slug } } = props
    const fetchRoom = async () => getRoom(slug)

    const { data: room, error, isLoading } = useSWR('/api/room', fetchRoom)

    if (error) throw new Error('Cannot fetch data!')
    if (typeof room === 'undefined' && !isLoading) throw new Error('Cannot fetch data!')

    if (!room) return <Loader />

    console.log(room)

    return (
        <>
            <Header />
            <div className="">
                <HotelPhotoGallery photos={room.images} />
            </div>
            <Footer />
        </>
    )
}
