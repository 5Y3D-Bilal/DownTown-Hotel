'use client'
import Search from '@/components/CLIENT/Search/Search';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import RoomCard from '@/components/RoomCard/RoomCard';
import { getRooms } from '@/libs/apis';
import { Room } from '@/models/roon';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

type pageProps = {

};

const Rooms: React.FC<pageProps> = () => {
    const [roomTypeFilter, setRoomTypeFilter] = useState("")
    const [searchQuery, setSearchQuery] = useState('')
    const searchParams = useSearchParams()

    useEffect(() => {
        const searchQuery = searchParams.get("searchQuery")
        const roomType = searchParams.get("roomType")


        if (searchQuery) setSearchQuery(searchQuery)
        if (roomType) setRoomTypeFilter(roomType)

    }, [])

    async function fetchData() {
        return getRooms()
    }

    const { data, error, isLoading } = useSWR('get/hotelRooms', fetchData)

    if (error) throw new Error("Failed to load");
    if (typeof data === "undefined" && !isLoading) throw new Error("Failed to load");

    const filterRooms = (rooms: Room[]) => {
        return rooms.filter(room => {
            // So if (roomTypeFilter !== all and room.type !==  roomTypeFilter) then return false
            if (roomTypeFilter && roomTypeFilter.toLowerCase() !== "all" && room.type.toLowerCase() !== roomTypeFilter.toLowerCase()) {
                return false
            }

            //So if (searchQuery is dose not match with room.name then just return) false
            if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

            return true
        })
    }

    const filtredRooms = filterRooms(data || [])
    console.log(filtredRooms)

    return (
        <>
            <Header />
            <div className='container mx-auto pt-10'>
                <Search
                    RoomTypeFilter={roomTypeFilter}
                    searchQuery={searchQuery}
                    setRoomTypeFilter={setRoomTypeFilter}
                    setSearchQuery={setSearchQuery}
                />

                <div className='flex mt-20  justify-between flex-warp'>
                    {filtredRooms.map((room) => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )

}
export default Rooms;