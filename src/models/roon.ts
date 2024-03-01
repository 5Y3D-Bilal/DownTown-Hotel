export type CoverImage = {
  url: string;
};

export type Image = {
  _key: string;
  url: string;
};

export type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

export type Slug = {
  _type: string;
  current: string;
};

export type Room = {
  _id: string;
  coverImage: CoverImage;
  description: string;
  dimension: string;
  discount: number;
  images: Image[];
  isBooked: boolean;
  isFeatured: boolean;
  name: string;
  numberOfBeds: number;
  offerAmenities: Amenity[];
  price: number;
  slug: Slug;
  sepicalNote: string;
  type: string;
};
