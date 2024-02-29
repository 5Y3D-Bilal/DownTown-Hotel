import Image from "next/image";
import CountUpNumber from "../CLIENT/CountUpNumber/CountUpNumber";

type HeroSectionProps = {

};

const HeroSection: React.FC<HeroSectionProps> = () => {

    return <section className="flex px-4 items-center gap-12 container mx-auto">
        <div className="py-10 h-full">
            {/* Heading */}
            <h1 className="font-heading mb-6">
                Explore Our Hotle
            </h1>
            <p className="text-[#4A4A4A] dark:text-[#ffffffea] mb-12 max-w-lg">
                Expirence an Exquistie Hotle Immersed in Rich History and Timeless Elegance.
            </p>
            <button className="btn-primary">Get Started</button>
            {/* Room Description */}
            <div className="flex justify-between mt-12">
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-lg text-center">
                        Basic Room
                    </p>
                    <CountUpNumber duration={3000} countTill={200} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-lg text-center">
                        Luxury Room
                    </p>
                    <CountUpNumber duration={3000} countTill={25} />

                </div> <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-lg text-center">
                        Suite
                    </p>
                    <CountUpNumber duration={3000} countTill={90} />
                </div>
            </div>
        </div>

        {/* Images */}
        <div className="md:grid hidden gap-8 grid-cols-1">
            <div className="rounded-2xl overflow-hidden h-48">
                <Image src="/image/hero-1.jpeg" alt="" className="img scale-animation" width={300} height={300} />
            </div>
            <div className="grid grid-cols-2 gap-8 h-48">
                <div className="rounded-2xl overflow-hidden">
                    <Image src="/image/hero-2.jpeg" alt="" className="img scale-animation" width={300} height={300} />
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <Image src="/image/hero-3.jpeg" alt="" className="img scale-animation" width={300} height={300} />
                </div>
            </div>
        </div>
    </section>
}
export default HeroSection;