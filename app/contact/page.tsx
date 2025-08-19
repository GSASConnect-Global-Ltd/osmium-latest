import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetail";
import FAQ from "@/components/contact/FAQ";
import SocialLinks from "@/components/contact/SocialLinks";
import heroImage from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Get in Touch: Let Us Build the
            <span className="block text-white/90">Future Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Let us discuss your vision and create something extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
              Send Us a Message
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              Tell us about your project and we will get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 lg:py-24 bg-[var(--footer-bg)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
              Get in Touch
            </h2>
            <p className="text-lg text-[var(--foreground)]/70">
              Multiple ways to reach our team
            </p>
          </div>
          <ContactDetails />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--foreground)]/70">
              Everything you need to know about working with us
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 lg:py-24 bg-[var(--footer-bg)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Follow Us
          </h2>
          <p className="text-lg text-[var(--foreground)]/70 mb-8">
            Stay connected and get the latest updates
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
