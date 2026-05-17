
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative h-65 flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/assets/CTA.png"
        alt="CTA Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 space-y-4">
        <h2 className="text-4xl font-serif font-semibold text-white">
          Ready To Start Your Journey?
        </h2>
        <p className="text-slate-300 text-sm">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 border border-white text-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-slate-800 transition-all"
        >
          BOOK YOUR TRIP TODAY <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;