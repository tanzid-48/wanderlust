import { ShieldCheck, Map, Headphones } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} className="text-teal-500" />,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: <Map size={28} className="text-teal-500" />,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: <Headphones size={28} className="text-teal-500" />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#EEF9F9] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-semibold text-slate-800">
            Why Choose Wanderlust
          </h2>
          <p className="text-slate-500 mt-3 text-sm">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 space-y-3"
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;