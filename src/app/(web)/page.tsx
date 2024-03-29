import FeaturedRooms from "@/components/FeaturedRooms/FeaturedRooms";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

export default async function Home() {
  const FeaturedRoom = await getFeaturedRoom()

  console.log(FeaturedRoom)

  return (
    <>
      {/* Header */}
      <Header />
      {/*Hero Section  */}
      <HeroSection />
      {/* Page Search */}
      <PageSearch />
      {/* Featured Rooms */}
      <FeaturedRooms FeaturedRoom={FeaturedRoom} />
      {/* Gallery */}
      <Gallery />
      {/* New Letter */}
      <NewsLetter />
      {/* Footer */}
      <Footer />
    </>
  )
}
