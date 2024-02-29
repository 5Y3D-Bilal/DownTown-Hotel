'use client'
import React, { useEffect, useState } from 'react';

type CountUpNumberProps = {
    countTill: number
    duration: number
};

const CountUpNumber: React.FC<CountUpNumberProps> = ({ countTill, duration }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animateFrameId: number

        const updateCount = (timeStamp: number) => {
            if (!startTime) startTime = timeStamp
            const progress = timeStamp - startTime

            if (progress < duration) {
                setCount(Math.min(countTill, (progress / duration) * countTill))
                animateFrameId = requestAnimationFrame(updateCount)
            } else {
                setCount(countTill)
            }
        }
        animateFrameId = requestAnimationFrame(updateCount)

        return () => cancelAnimationFrame(animateFrameId)
    }, [countTill, duration])

    return <p className='md:font-bold font-medium text-lg xl:text-5xl'>
        {Math.round(count)}
    </p>
}
export default CountUpNumber;


