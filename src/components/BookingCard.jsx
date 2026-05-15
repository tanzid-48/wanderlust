"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const BookingCard = ({ destination }) => {
  const { _id, destinationName, country, price, imageUrl } = destination;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departure, setDeparture] = useState(null);

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,

      destinationId: _id,
      destinationName,
      imageUrl,
      country,
      price,

      departureDate: departure?.toDate("Asia/Dhaka"),
    };

    const res = await fetch("https://wanderlust-server-3.onrender.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
      toast.success(`${destinationName} Booking Successfully`)
     return data;
     
    
  };

  return (
    <div>
      <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6 flex items-center justify-between">
        <DateField
          value={departure}
          onChange={setDeparture}
          className="w-[256px]"
          name="date"
        >
          <Label className="text-slate-500 text-sm font-medium">
            Departure
          </Label>

          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      <Button
        onClick={handleBooking}
        className="w-full bg-sky-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 hover:shadow-lg  mb-8"
      >
        Book Now <ArrowRight size={20} />
      </Button>
    </div>
  );
};

export default BookingCard;


