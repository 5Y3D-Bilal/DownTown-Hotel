import Stripe from "stripe";

import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getRoom } from "@/libs/apis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

// Thing which are required for making a payment
type RequestData = {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children: number;
  numberOfDays: number;
  hotelRoomSlug: string;
};

export async function POST(req: Request, res: Response) {
  const {
    checkinDate,
    adults,
    checkoutDate,
    children,
    hotelRoomSlug,
    numberOfDays,
  }: RequestData = await req.json();

  //   A Vailidation so all the input types are filled and they arent just throw  a error
  if (
    !checkinDate ||
    !checkoutDate ||
    !adults ||
    !hotelRoomSlug ||
    !numberOfDays
  ) {
    return new NextResponse("Please all fields are required", { status: 400 });
  }

  const origin = req.headers.get("origin");

  //   Logic for if a user is not authenticated just throw an error
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentication required", { status: 400 });
  }

  //   Get User DataID from Session
  const userId = session.user.id;
  const formattedCheckoutDate = checkoutDate.split("T")[0];
  const formattedCheckinDate = checkinDate.split("T")[0];

  try {
    const room = await getRoom(hotelRoomSlug);
    // Making a logic for the discounted price of the room FOR-EXAMPLE [$100 with discount of $10 ] = $90
    const discountPrice = room.price - (room.price / 100) * room.discount;
    // Logic for payment if a room cost 50 dollars and i booked it for 2 days my total will be a 100 dollars
    const totalPrice = discountPrice * numberOfDays;

    // Creating a stripe payment method
    const stripeSession = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            // Payment In Dollars
            currency: "usd",
            // When Some 1 trys to pay using stipe they will see a Roomimage and roomName
            product_data: {
              name: room.name,
              images: room.images.map((image) => image.url),
            },
            // Your Total price will be multiplied with 100 cent  cause Stripe works in cents
            unit_amount: parseInt((totalPrice * 100).toString()),
          },
        },
      ],
      payment_method_types: ["card"],
      success_url: `${origin}/users/${userId}`,
      cancel_url: `${origin}/rooms/${hotelRoomSlug}`,
      metadata: {
        adults,
        checkinDate: formattedCheckinDate,
        checkoutDate: formattedCheckoutDate,
        children,
        hotelRoom: room._id,
        numberOfDays,
        user: userId,
        discount: room.discount,
        totalPrice,
      },
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: "Payment session created",
    });
  } catch (error: any) {
    console.log("Payment falied", error);
    return new NextResponse(error, { status: 500 });
  }
}
