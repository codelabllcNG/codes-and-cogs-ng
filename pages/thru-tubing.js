import Image from "next/image";
import ContactForm from "../components/contact-us/ContactForm";

export default function ThruTubingSolutions() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header Section */}
      <div className="bg-pry-color text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Thru Tubing Re-Entry Solutions</h1>
        <p className="mt-2 text-lg">
          Unlocking Cost-Effective, Efficient Solutions for Marginal Field
          Challenges
        </p>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <p className="text-xl leading-relaxed">
            When dealing with marginal fields, operators face unique challenges
            such as low reservoir pressure, sand encroachment, and failures in
            gravel packs or screens. Our Thru Tubing Re-Entry Solutions offer
            the perfect balance of efficiency, precision, and affordability to
            keep your wells productive and profitable.
          </p>
        </section>

        {/* Offerings Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <Image
                src={offering.image}
                alt={offering.title}
                width={400}
                height={300}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-pry-color mb-2">
                {offering.title}
              </h3>
              <p className="text-gray-700 text-base">{offering.description}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-pry-color text-center mb-6">
            Why Choose Our Thru Tubing Re-Entry Solutions?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-base">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 bg-[#ECF1FA] py-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-pry-color">Let Us Help You</h2>
          <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
            At Codes and Cogs, we understand the importance of cost-effective
            solutions in marginal field operations. Our Thru Tubing Re-Entry
            Solutions provide a practical, efficient alternative to conventional
            methods, ensuring that your wells remain productive and profitable
            without breaking the bank. Let us help you tackle your well
            challenges with precision and innovation. Contact us today to learn
            more about our thru tubing capabilities and how we can support your
            operations.
          </p>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}

const offerings = [
  {
    title: "Low Reservoir Pressure Mitigation",
    description:
      "Our re-entry solutions involve deploying smaller OD (outer diameter) tubing designed to enhance flow dynamics and optimize production from low-pressure reservoirs. This approach reduces wellbore flow restrictions and maximizes hydrocarbon recovery without significant interventions.",
    image: "/images/Designer - 2025-01-02T160031.413.png",
  },
  {
    title: "Sand Encroachment Management",
    description:
      "Sand production can severely impact well performance and equipment integrity. Using specialized tools and techniques, we re-enter wells with precision to install robust sand control systems such as stand-alone screens, which are cost-effective alternatives to gravel packing.",
    image: "/images/pexels-life-of-pix-2391.jpg",
  },
  {
    title: "Failed Screen or Gravel Pack Solutions",
    description:
      "Our team addresses screen or gravel pack failures by providing innovative downhole technologies that can restore well integrity and production. These include Deploying replacement screens or customized sand filters and installing targeted solutions to isolate problem zones and prevent further sand ingress.",
    image: "/images/Designer (100).png",
  },
  {
    title: "Rejuvenation of Mature or Shut-In Wells",
    description:
      "Wells with declining production or operational inefficiencies can be revived using thru tubing re-entry techniques. This includes isolating water-producing zones, improving pressure communication, and re-stimulating reservoir flow paths.",
    image: "/images/pexels-umaraffan499-87236.jpg",
  },
  {
    title: "Plugging and Zonal Isolation",
    description:
      "Our solutions include precise placement of plugs or packers to isolate problematic zones, allowing you to target productive intervals with greater accuracy.",
    image: "/images/Designer - 2025-01-02T161731.066.png",
  },
  {
    title: "Wellbore Cleanouts",
    description:
      "Thru tubing cleanout tools efficiently remove debris, scale, and other obstructions, ensuring smooth production flow and extending well life.",
    image: "/images/Designer - 2025-01-02T161457.589.png",
  },
];

const benefits = [
  "Cost Efficiency: Significant cost savings without sacrificing operational effectiveness.",
  "Minimized Downtime: Streamlined operations with minimal disruption to production schedules.",
  "Targeted Problem Resolution: Tailored solutions for specific well challenges.",
  "Expert Team & Advanced Tools: Precision and reliability in every operation.",
  "Sustainable Field Management: Extend field life with cost-effective interventions.",
  "Water Shut-Off: Precision tools to isolate water-producing zones and improve oil recovery.",
  "Corrosion Damage Repairs: Reinforcement or replacement of corroded tubing sections to maintain integrity.",
  "Scale Removal: Effective removal of mineral deposits that impede flow.",
];
