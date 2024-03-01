import { Room } from "@/models/roon";
import sanityClient from "./sanity";
import * as queries from "./sanityQuerys";

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuerys,
    {},
    { cache: "no-cache" }
  );

  return result;
}

export async function getRooms() {
  const result = await sanityClient.fetch<Room[]>(queries.getRoomsQuery);
  return result;
}
