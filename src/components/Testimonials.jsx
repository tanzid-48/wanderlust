import Image from "next/image";
import React from "react";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Tanzid Mondol",
    location: "Bogura,Bangladesh",
    image: "https://i.ibb.co.com/4Z8SqcvS/23.jpg",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-serif font-semibold text-slate-800">
              What Travelers Say
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-all">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-all">
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-8 flex gap-6 items-start"
            >
              <div className="flex-1 space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {t.quote}
                </p>
                <div>
                  <p className="text-teal-500 font-semibold text-sm">
                    — {t.name}
                  </p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
              <Image
                src={t.image}
                alt={t.name}
                width={96}
                height={128}
                className="object-cover rounded-lg flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
