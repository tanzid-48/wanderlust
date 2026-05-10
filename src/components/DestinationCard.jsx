import Image from "next/image";
import React from "react";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"; 
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { destinationName, country, price, duration, imageUrl } = destination;

  return (
    <div className="bg-white rounded-xl overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="py-4 space-y-3">
        {/* Country */}
        <div className="flex items-center gap-1 text-slate-500 text-sm">
          <MapPin size={16} />
          <span>{country}</span>
        </div>

        {/* Name and Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-800">{destinationName}</h3>
          <div className="text-right">
            <span className="text-xl font-bold">${price}</span>
            <span className="text-xs text-slate-500 block">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Calendar size={16} />
          <span>{duration}</span>
        </div>

        {/* Book Now Link */}
        <div className="pt-2">
          <Link href={'/myBooking'} className="flex items-center gap-1 text-sky-500 font-semibold hover:underline   text-sm tracking-wider">
            Book Now <ArrowUpRight size={18} />
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;