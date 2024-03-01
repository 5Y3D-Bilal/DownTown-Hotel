'use client'
export default function Error({ error, reset }:
    {
        error: Error & { digest?: string }
        reset: () => void
    }) {
    return (

        <div className="container mx-auto min-h-screen flex justify-center items-center">
            <div className="flex flex-col">
                <h2 className="font-heading text-red-800 mb-10">
                    404  - Something went worng.
                </h2>
                <button onClick={() => reset()} className="btn-primary">
                    Try Again
                </button>
            </div>
        </div>
    )
}
