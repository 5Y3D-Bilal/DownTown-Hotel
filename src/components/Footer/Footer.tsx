import Link from 'next/link';
import React from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

    return <footer className='mt-16'>
        <div className='container mx-auto px-4'>
            <Link href="/" className='font-black text-tertiary-light'>
                DownTown
            </Link>
            <h4 className='font-semibold text-[40px] py-6'>Contact</h4>
            <div className='flex flex-warp gap-16 items-center justify-between'>
                <div className='flex-1'>
                    <p>xyz Road</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill />
                        <p className='ml-2'>Coded By Bilal567</p>
                    </div>
                    <div className="flex items-center">
                        <BsTelephoneOutbound />
                        <p className='ml-2'>000-000-000-000</p>
                    </div>
                    <div className="flex items-center py-4">
                        <BiMessageAltDetail />
                        <p className='ml-2'>Coded By Bilal567</p>
                    </div>


                </div>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">
                        Our Story
                    </p>
                    <p className="pb-4">
                        Get in Touch
                    </p>
                    <p className="pb-4">
                        Our Privacy Commitment
                    </p>
                    <p>
                        Coustomer Assistance
                    </p>
                </div>

                <div className="flex-1 md:text-right">
                    <p className="pb-4">
                        Dining Exprience
                    </p>
                    <p className="pb-4">
                        Wellness
                    </p>
                    <p className="pb-4">
                        Fitness
                    </p>
                    <p className="pb-4">
                        Sports
                    </p>
                    <p >
                        Events
                    </p>
                </div>

            </div>
        </div>
        <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0 flex items-center justify-center'>
            <Link href={''} className='text-white'>Code by Bilal567</Link>
        </div>
    </footer>
}
export default Footer;