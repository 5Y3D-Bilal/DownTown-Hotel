import { Room } from '@/models/roon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type RoomCardProps = {
    room: Room
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {

    return <div className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'>
        <div className='h-60 overflow-hidden'>
            <Image src={room.coverImage.url} alt={room.name} width={250} height={250} className='img scale-animation' />
        </div>

        <div className='p-4 bg-white'>
            <div className='flex justify-between text-2xl font-semibold'>
                <p className=''>{room.name}</p>
                <p className=''>${room.price}</p>
            </div>

            <p className='pt-2 text-xs'>{room.type} Room</p>
            <p className='pt-3 pb-6'>{room.description.slice(0,100)}...</p>

            <Link href={`/rooms/${room.slug.current}`} className='bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl hover:-translate-y-2 hover:shadow-lg transition-all duration-500'>
                {room.isBooked ? "Booked" : "Book now!"}
            </Link>
        </div>
    </div>
}
export default RoomCard;