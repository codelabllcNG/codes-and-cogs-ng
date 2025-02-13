import Image from "next/image";
import ContactForm from "../components/contact-us/ContactForm";

export default function WellInsightServices() {
  return (
    <div className="text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-pry-color text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Well Insight Services</h1>
        <p className="mt-2 text-lg">
          Delivering Reliable, Accurate, and Actionable Well Data
        </p>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        {/* Intro Section */}
        <section className="mb-12 text-center">
          <p className="text-xl leading-relaxed">
            In the complex world of oilfield operations, reliable and accurate
            well data is the cornerstone of success. Our Well Insight Services
            combine expert knowledge with cutting-edge AI and Machine Learning
            technologies to provide unmatched precision in understanding
            wellbore and reservoir conditions.
          </p>
        </section>

        {/* Capabilities Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <Image
                src={capability.image}
                alt={capability.title}
                width={400}
                height={300}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-pry-color mb-2">
                {capability.title}
              </h3>
              <p className="text-gray-700 text-base">
                {capability.description}
              </p>
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-pry-color text-center mb-6">
            Why We Stand Out
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 bg-[#ECF1FA] py-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-pry-color">
            Trust Us for Precision
          </h2>
          <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
            At Codes and Cogs, we believe that success lies in the details. Our
            combination of highly skilled personnel, cutting-edge technology,
            and AI-enhanced solutions ensures that you receive the most accurate
            and actionable well insights. Trust us to help you unlock the full
            potential of your oilfield operations with precision and confidence.
          </p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

const capabilities = [
  {
    title: "BHP Surveys Enhanced with AI",
    description:
      "We utilize advanced Bottom Hole Pressure (BHP) surveys to gather critical reservoir information. By integrating AI and Machine Learning, we ensure data accuracy, minimize errors, and provide actionable insights that optimize reservoir performance, production strategies, and well integrity monitoring.",
    image: "/images/pexels-life-of-pix-2391.jpg",
  },
  {
    title: "Feeds-to-Images Solution with Downhole Cameras",
    description:
      "Leveraging our real-time downhole camera technology, we provide unparalleled visualization of wellbore conditions, powered by AI-enhanced image processing, our system ensures quicker and more accurate diagnostics for fish-in-hole scenarios with rapid and clear identification of tools or debris left in the well, and tubing integrity scanning with advanced detection of structural issues to prevent failures",
    image: "/images/Designer (100).png",
  },
  {
    title: "Surface Well Testing with Smart Analytics",
    description:
      "Our surface well testing services complement downhole insights by providing a comprehensive analysis of well performance. Using smart data analytics, we deliver detailed evaluations of flow rates, fluid properties, and surface pressures to support informed operational decisions.",
    image: "/images/pexels-umaraffan499-87236.jpg",
  },
];

const benefits = [
  "Expert Team with Proven Excellence: Our team comprises industry experts who bring years of hands-on experience and technical knowledge to every project. Their dedication and expertise ensure that every operation is executed flawlessly.",
  "AI-Driven Accuracy: By integrating Artificial Intelligence and Machine Learning into our workflows, we eliminate the risks of human error and deliver precise, reliable data to empower your decision-making.",
  "Real-Time Insights for Faster Decisions: With real-time data feeds and intelligent analytics, we provide actionable insights at a speed that minimizes downtime and keeps your operations efficient.",
  "End-to-End Well Insight Solutions: From downhole imaging and reservoir diagnostics to surface testing, we deliver a seamless and comprehensive service that ensures you have a full understanding of your well’s performance.",
];
