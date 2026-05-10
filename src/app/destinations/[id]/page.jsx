import { getSingleDestination } from "@/app/lib/data";
import React from "react";
import Link from "next/link";

import {
  MapPin,
  Calendar,
  Star,
  ArrowLeft,
  ArrowRight,
  Edit,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const DetailsDestinationPage = async ({ params }) => {
  const { id } = await params;
  const destination = await getSingleDestination(id);
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    description,
    departureDate,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 text-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Destinations</span>
        </Link>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
            <Edit size={16} /> Edit
          </button>
          <button className="flex items-center gap-2 border border-red-100 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            <Trash2 size={16} /> Cancel
          </button>
        </div>
      </div>

      <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-10">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 text-sky-600 font-medium mb-3">
            <MapPin size={18} />
            <span>{country}</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            {destinationName}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-10 text-slate-600">
            <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">
              <Star size={16} fill="currentColor" />
              <span>4.9 (234 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-sky-500" />
              <span className="font-medium">{duration}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none border-t border-slate-100 pt-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              Description
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 sticky top-8">
            <div className="mb-6">
              <p className="text-slate-400 text-sm font-medium mb-1">
                Starting from
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-sky-500">
                  ${price}
                </span>
                <span className="text-slate-400 text-sm">/person</span>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6 flex items-center justify-between">
              <span className="text-slate-500 text-sm font-medium">
                Departure:
              </span>
              <span className="text-slate-900 font-bold">
                {departureDate || "05/15/2026"}
              </span>
            </div>

            <Link href={'/myBooking'} className="w-full bg-sky-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200 transition-all active:scale-[0.98] mb-8">
              Book Now <ArrowRight size={20} />
            </Link>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <p className="text-sm text-slate-600">
                  Free cancellation up to 7 days before trip
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <p className="text-sm text-slate-600">
                  Comprehensive travel insurance included
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                <p className="text-sm text-slate-600">
                  24/7 on-ground customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDestinationPage;
