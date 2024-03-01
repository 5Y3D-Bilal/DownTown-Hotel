import { groq } from "next-sanity";

export const getFeaturedRoomQuerys = groq`*[_type == "hotelRoom" && isFeatured == true] [0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage
}`

export const getRoomsQuery = groq`*[_type == "hotelRoom"] {
    _id,
    coverImage,
    description,
    dimension,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    type,
    images
}`