import { createBooking, updateHotelRoom } from "@/libs/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const chechout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!signature || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, signature, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`WebHook Error ${error.message}`, { status: 500 });
  }

  //   load our events
  switch (event.type) {
    case chechout_session_completed:
      const session = event.data.object;

      const {
        metadata: {
          // @ts-ignore
          adults,
          // @ts-ignore
          checkinDate,
          // @ts-ignore
          checkoutDate,
          // @ts-ignore
          children,
          // @ts-ignore
          hotelRoom,
          // @ts-ignore
          numberOfDays,
          // @ts-ignore
          user,
          // @ts-ignore
          discount,
          // @ts-ignore
          totalPrice,
        },
      } = session;

      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      // Update Hotel Room
      await updateHotelRoom(hotelRoom);

      //Create a booking
      return NextResponse.json("Booking success", {
        status: 200,
        statusText: "Booking Successful",
      });

    default:
      console.log(`unHandle Event Type ${event.type}`);
  }
  return NextResponse.json("Booking success", {
    status: 200,
    statusText: "Booking Successful",
  });
}
