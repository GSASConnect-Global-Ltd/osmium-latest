import { ArrowDown, ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-osmium-black leading-tight tracking-tight">
            <span className="block">OSMIUM</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-light text-osmium-gray-600 mt-4">
              Technology Solutions
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-osmium-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future through innovative technology solutions across
            AI, Digital Twins, Gaming, Software Engineering, Renewable Energy,
            Extended Reality, and Smart Home Systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              type="button"
              className="inline-flex items-center justify-center bg-osmium-black text-osmium-white hover:bg-osmium-gray-800 shadow-elegant px-8 py-4 text-lg rounded"
            >
              <span>Explore Our Solutions</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-200" />
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center border-2 border-osmium-black text-osmium-black hover:bg-osmium-black hover:text-osmium-white shadow-button px-8 py-4 text-lg rounded"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-osmium-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
