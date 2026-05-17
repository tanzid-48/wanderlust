import { getFeaturedDestinations } from "@/lib/api";
import DestinationCard from "@/components/DestinationCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Featured = async () => {
  const res = await fetch("https://wanderlust-server-3.onrender.com/featured", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch featured destinations");
  }

  const destinations = await res.json();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-800">Featured Destinations</h2>
          <p className="text-slate-500 mt-2">Handpicked travel experiences for the adventure seekers</p>
        </div>
        <Link
          href="/destinations"
          className="flex items-center gap-2 border border-slate-300 px-5 py-2 text-sm font-semibold tracking-widest hover:bg-slate-50 transition-all"
        >
          ALL DESTINATIONS <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Featured;