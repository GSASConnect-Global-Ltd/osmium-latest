"use client";

const HeroSection = () => {
  return (
    <section className="bg-black text-gray-900 min-h-[70vh] flex items-center px-[120px] py-[100px]">
      <div className="container px-6 mx-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="space-y-6">
            <p
                className="text-white uppercase"
                style={{
                    fontFamily: "Satoshi",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "16px",
                    letterSpacing: "1%",
                }}
                >
                Contact ORREL
                </p>

            <p
            style={{
                fontFamily: "PP Editorial New",
                fontWeight: 200,
                fontStyle: "normal", // "Ultralight" is represented as 200 weight
                fontSize: "72px",
                lineHeight: "80px",
                letterSpacing: "4%",
                width: "597.64px",
                height: "160px",
                opacity: 1,
                color: "white"
            }}
            >
            Start a Conversation With ORREL
            </p>

          </div>

          {/* Right side */}
          <div className="lg:pl-8">
           <p
  style={{
    fontFamily: "Satoshi",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "1%",
    width: "462.4px",
    height: "72px",
    opacity: 1,
  }}
  className="text-white"
>
  Whether you have a project in mind, see a partnership opportunity, 
  or want to explore investing in Africa&apos;s innovation future—we&apos;re 
  ready to collaborate.
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
