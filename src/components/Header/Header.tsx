"use client"
import ThemeContext from '@/context/themeContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import { signOut } from "next-auth/react"
import Image from 'next/image';


type HeaderProps = {

};

const Header: React.FC<HeaderProps> = () => {

    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
    const { data: session } = useSession()
    console.log(session)

    return (
        <header className='
        py-10 px-4 container mx-auto text-xl flex flex-warp md:flex-nowrap items-center justify-between
    '>
            <div className='flex items-center w-full md:w-2/3'>
                <Link href={`/`} className='font-black text-2xl text-tertiary-light'>
                    DownTown
                </Link>
                <ul className="flex items-center ml-5">
                    <li className='flex items-center '>
                        {/* So we are using a id but our session do not provide use the id parameter. For solving that error we have made a interface for id and inject it in next-auth package. */}
                        {session?.user ? (<Link href={`/users/${session.user.id}`} >
                            {session?.user?.image ? (
                                <div className='overflow-hidden rounded-full w-10 h-10'>
                                    <Image src={session.user.image} alt='userImage' className='img scale-animation' width={40} height={40} />
                                </div>
                            ) : (
                                <FaUserCircle className='cursor-pointer' />
                            )}
                        </Link>) : (<Link href={'/auth'} >
                            {session?.user?.image ? (
                                <div className='overflow-hidden rounded-full'>
                                    <Image src={session.user.image} alt='userImage' className=' hover:scale-105 w-full' width={30} height={30} />
                                </div>
                            ) : (
                                <FaUserCircle className='cursor-pointer' />
                            )}
                        </Link>)}

                    </li>
                    <li className='ml-2 cursor-pointer hover:-translate-y-1 duration-500'>
                        {darkTheme ? <MdOutlineWbSunny
                            className='animate-spin'
                            onClick={() => {
                                setDarkTheme(false)
                                localStorage.removeItem("theme")
                            }} /> : <MdDarkMode onClick={() => {
                                setDarkTheme(true)
                                JSON.stringify(localStorage.setItem("theme", "true"))
                            }} />}
                    </li>
                </ul>
            </div>

            <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                    <Link href={'/rooms'}>Rooms</Link>
                </li>
                <li className='hover:-translate-y-2 duration-500 transition-all'>
                    <Link href={'/contact'}>Contact</Link>
                </li>
                <li onClick={() => signOut()}>
                    d
                </li>
            </ul>
        </header>
    )
}
export default Header;