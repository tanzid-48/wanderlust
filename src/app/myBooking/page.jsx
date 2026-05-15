import React from "react";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import { Button, Card, Chip } from "@heroui/react";
import { LuCalendar, LuMapPin, LuEye, } from "react-icons/lu";
import Image from "next/image";
import BookingCancel from "@/components/BookingCancle";

const BookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const res = await fetch(`https://wanderlust-server-3.onrender.com/booking/${user?.id}`, {
    cache: "no-store",
  });
  const bookings = await res.json();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-5xl font-serif text-gray-800 mb-2">My Bookings</h1>
        <p className="text-gray-500 text-lg">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {bookings.map((booking) => (
          <Card
            key={booking._id}
            className="p-0 border border-gray-100 shadow-sm rounded-none overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 p-4">
              <div className="w-full md:w-72 h-48 relative">
                <Image
                  src={booking?.imageUrl}
                  alt={booking.destinationName}
                  width={500}
                  height={400}
                  className="object-cover  rounded-none"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-2"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {booking.destinationName}
                </h2>

                <div className="space-y-2 text-gray-500">
                  <div className="flex items-center gap-2 text-sm">
                    <LuCalendar size={16} />
                    <span>
                      Departure:{" "}
                      {new Date(booking.departureDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <LuMapPin size={16} />
                    <span>Booking ID: {booking._id}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-4xl font-bold text-cyan-500">
                    ${booking.price}
                    <span className="text-gray-400 text-sm font-medium">
                    /per person
                  </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-end items-center gap-3">
               <BookingCancel bookingId = {booking._id}></BookingCancel>
                <Button
                  className="bg-cyan-500 text-white font-medium px-6 h-11 rounded"  
                >
                 <LuEye size={18} /> View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
