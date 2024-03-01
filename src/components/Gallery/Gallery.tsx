import Image from 'next/image';
import React from 'react';

type GalleryProps = {

};

const Gallery: React.FC<GalleryProps> = () => {
    return (
        <div className='mx-auto container py-14 h-full'>
            <div className='flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-1.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-2.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-full p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-3.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-full p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-1.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-2.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48 overflow-hidden rounded-md'>
                        <Image
                            alt='gallery'
                            className='img scale-animation rounded-md'
                            src='/image/hero-3.jpeg'
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;





