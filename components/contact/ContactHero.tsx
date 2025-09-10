"use client";

const HeroSection = () => {
  return (
    <section className="bg-black min-h-[70vh] px-4 sm:px-6 md:px-12 lg:px-[120px] pt-[80px] sm:pt-[140px] md:pt-[200px] lg:pt-[365px] pb-12 sm:pb-16 lg:pb-[100px]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <p
              className="text-white uppercase"
              style={{
                fontFamily: "Satoshi",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "18px",
                letterSpacing: "0.08em",
              }}
            >
              Contact ORREL
            </p>

            <h1
              className="text-white mx-auto lg:mx-0 text-[28px] sm:text-[42px] md:text-[56px] lg:text-[72px] leading-[36px] sm:leading-[52px] md:leading-[68px] lg:leading-[80px]"
              style={{
                fontFamily: "PP Editorial New",
                fontWeight: 200,
                letterSpacing: "-0.01em",
                maxWidth: "600px",
              }}
            >
              Start a Conversation With ORREL
            </h1>
          </div>

          {/* Right side */}
          <div className="lg:pl-8">
            <p
              className="text-white mx-auto lg:mx-0 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-center lg:text-left max-w-[90%] sm:max-w-[460px]"
              style={{
                fontFamily: "Satoshi",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Whether you have a project in mind, see a partnership opportunity,
              or want to explore investing in Africa&apos;s innovation
              future—we&apos;re ready to collaborate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
