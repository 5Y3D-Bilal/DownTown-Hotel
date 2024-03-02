'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react';

type SearchProps = {
    RoomTypeFilter: string
    searchQuery: string
    setRoomTypeFilter: (value: string) => void
    setSearchQuery: (value: string) => void
};

const Search: React.FC<SearchProps> = ({ RoomTypeFilter, searchQuery, setRoomTypeFilter, setSearchQuery }) => {
    const router = useRouter()

    const handleRoomType = (e: ChangeEvent<HTMLSelectElement>) => {
        setRoomTypeFilter(e.target.value)
    }

    const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleFilterClick = () => {
        // Navigate to the rooms page with the query
        router.push(`/rooms?roomType=${RoomTypeFilter}&searchQuery=${searchQuery}`)
    }

    return <section className='bg-tertiary-dark px-4 py-6 mt-10'>
        <div className='container mx-auto flex gap-4 flex-wrap justify-between items-center'>
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
                <label className='block text-sm font-medium mb-2 text-white'>
                    Room Type
                </label>
                <div className="relative">
                    <select
                        value={RoomTypeFilter}
                        onChange={handleRoomType}
                        className='w-full px-4 py-2 capitalize rounded leading-light dark:bg-black focus:outline-none'>
                        <option value="All">All</option>
                        <option value="Basic">Basic</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Suite">Suite</option>
                    </select>
                </div>
            </div>
            <div className='w-full md:w-1/3 lg:w-auto mb-4 md:mb-0'>
                <label className='block text-sm font-medium mb-2 text-white'>Search</label>
                <input type="search" id='search' placeholder='Search Rooms.....' className='w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white'
                    value={searchQuery}
                    onChange={handleSearchQuery}
                />
            </div>

            <button className=' btn-primary' type='button'
                onClick={handleFilterClick}
            >Search</button>
        </div>
    </section>
}
export default Search;