"use client";

interface Feature {
  icon: React.ReactNode;
  title: string; // required
  description: string;
}

interface AdvantageSectionProps {
  heading: string;
  subtitle: string;
  features: Feature[];
}

const AdvantageSection: React.FC<AdvantageSectionProps> = ({
  heading,
  subtitle,
  features,
}) => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-[32px] leading-[40px] text-gray-900 mb-4 ppEditorial mx-auto"
          style={{ 
            fontWeight: 400,
            fontSize: "48px",
             maxWidth: "505px", 
             lineHeight: "58px",
            }} // ✅ heading width
        >
          {heading}
        </p>

        {/* Subtitle */}
        <p
          className="text-gray-600 max-w-3xl mx-auto mb-16 text-[16px] leading-[24px]"
          style={{ 
            fontFamily: "Satoshi",
            fontWeight: 400,
            
            }}
        >
          {subtitle}
        </p>

        {/* Features */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-black rounded-md">
                {feature.icon}
              </div>
              <h3
                className="mb-2 text-lg font-semibold text-gray-900"
                style={{ fontFamily: "Satoshi" }}
              >
                {feature.title} {/* ✅ now works */}
              </h3>
              <p
                className="text-gray-600 text-[14px] leading-[22px]"
                style={{ fontFamily: "Satoshi" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
