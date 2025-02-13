import { useRef } from "react";
import Image from "next/image";
import ContactForm from "../../components/contact-us/ContactForm";
import ContactFormWP from "../../components/contact-us/ContactFormWP";

export default function WellInsightServices() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      const offset = 150;
      const elementPosition =
        formRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="text-gray-800 font-sans">
      <header className="bg-pry-color text-white py-14 text-center">
        <p className="mb-4 text-lg">Whitepaper</p>
        <h1 className="text-4xl font-bold">AI-Based PCE Testing Services</h1>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div>
              <Image
                src="/images/Advancing Pressure Control.png"
                width={450}
                height={550}
                alt="Whitepaper Cover"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-sm md:text-base text-gray-800">
                Over the years, in the upstream oil and gas industry, ensuring
                the integrity and functionality of Pressure Control Equipment
                (PCE) is critical to the safety of personnel, assets, and the
                environment during well intervention operations.
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-800">
                This white paper introduces a proactive and comprehensive
                solution designed to inspect, pressure test, and function test
                PCEs daily, prior to well intervention activities. By leveraging
                fast and real-time data transmission and advanced monitoring
                techniques, this service mitigates risks, enhances safety, and
                optimizes operational efficiency.
              </p>

              {/* Button with Scroll Function */}
              <div className="mt-6">
                <button
                  onClick={handleScrollToForm}
                  className="bg-pry-color text-white px-4 py-2 rounded-lg font-medium shadow-md transition text-base"
                >
                  Get Whitepaper
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div ref={formRef} id="form">
           {/*  <ContactForm /> */}
            <ContactFormWP />
          </div>
        </section>
      </main>
    </div>
  );
}
