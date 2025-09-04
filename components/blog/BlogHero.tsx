"use client";

const BlogHero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 py-20 text-white bg-black">
      <div className="flex flex-col items-center justify-center max-w-2xl gap-6 text-center">
        
        {/* Our News */}
        <p
          className="font-normal text-base leading-[16px] tracking-[0.16px] text-gray-300"
          style={{ fontFamily: "Satoshi" }}
        >
          inside ORREL
        </p>

        {/* Our Blog */}
        <h2
          className="font-extralight text-[72px] leading-[80px] tracking-[2.88px] text-center"
          style={{ fontFamily: "PP Editorial New" }}
        >
          Our Blog
        </h2>

        {/* Inside ORREL */}
        <p
          className="text-lg leading-relaxed text-gray-400 md:text-xl"
          style={{ fontFamily: "Satoshi" }}
        >
          our news, latest update and resources on ORREL
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
