import { Room } from "@/app/models/roon";
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
