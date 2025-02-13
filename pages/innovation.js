import Image from "next/image";

export default function EmpoweringInnovation() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-pry-color text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Innovation in Oil & Gas
          </h1>
          <p className="text-lg md:text-xl">
            At Codes and Cogs, we are redefining the oil and gas industry by
            placing Artificial Intelligence (AI), Machine Learning (ML), and
            Internet of Things (IoT) technologies at the core of our solutions.
            Our commitment to innovation ensures that we remain at the forefront
            of advancements, providing businesses with the tools they need to
            overcome challenges, maximize operational efficiency, and achieve
            better returns on their investments.
          </p>
        </div>
      </header>

      {/* AI and IoT Section */}
      <section className="container mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4"> IoT-Enabled Monitoring</h2>
          <p className="text-lg mb-4">
            Our IoT systems integrate real-time sensors, downhole devices, and
            surface equipment to deliver a comprehensive view of field
            operations. Continuous data transmission ensures seamless
            monitoring, allowing businesses to stay ahead of issues before they
            escalate.
          </p>
        </div>
        <Image
          src="/images/inno1.webp"
          alt="AI and IoT Monitoring"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover object-top"
        />
      </section>

      {/* AI-Powered Decision-Making Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/inno2.png"
            alt="AI-Powered Decision-Making"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              AI-Powered Decision-Making
            </h2>
            <p className="text-lg mb-4">
              We use AI and Machine Learning models to analyze vast datasets
              from reservoirs, wells, and production facilities.
            </p>
            <p className="text-lg mb-4">
              These models identify trends, detect anomalies, and provide
              actionable insights, enabling clients to make well-informed
              decisions in real time. Examples include optimizing production
              strategies, predicting equipment failures, and enhancing reservoir
              performance with unmatched accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="container mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Training the Future Workforce
          </h2>
          <p className="text-lg mb-4">
            We utilize state-of-the-art simulators to equip local professionals
            with hands-on experience in oil and gas operations. From well
            intervention techniques to reservoir modeling, our training
            solutions ensure that the workforce is skilled, confident, and ready
            to excel. By fostering a culture of continuous learning, we empower
            businesses to develop local talent pools that are aligned with
            global standards. Our initiatives bridge the skills gap, creating
            opportunities for local professionals to contribute meaningfully to
            the industry.
          </p>
        </div>
        <Image
          src="/images/inno3.png"
          alt="Modern Simulators for Training"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </section>

      {/* Driving Value Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/inno4.1.png"
            alt="Driving Value for Businesses"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Driving Value for Businesses
            </h2>
            <ul className="list-disc pl-6 text-lg">
              <li>
                Maximize ROI through smarter decision-making and optimized
                operations.
              </li>
              <li>
                Reduce Operational Costs by predicting failures and extending
                equipment life.
              </li>
              <li>
                Enhance Sustainability by minimizing waste and improving
                efficiency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            The Codes and Cogs Difference
          </h2>
          <p className="text-lg mb-4">
            As pioneers in AI and IoT for oil and gas, we continuously push the
            boundaries of what’s possible. We tailor our solutions to meet the
            specific needs of each client, ensuring practical, impactful
            outcomes. Through our training programs, we are not just solving
            today’s problems but preparing for the industry’s future.
          </p>
        </div>
        <Image
          src="/images/1der.png"
          alt="Modern Simulators for Training"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </section>

      {/* Footer Section */}
      <footer className="bg-pry-color text-white py-6 text-center">
        <p className="text-lg w-[80%] m-auto">
          At Codes and Cogs, we believe that innovation is not just about
          technology—it’s about empowering people and businesses to achieve
          their fullest potential. By combining AI, IoT, and world-class
          training, we are creating a smarter, more efficient oil and gas
          industry, one solution at a time. Let’s work together to shape the
          future of oil and gas. Partner with us today.
        </p>
      </footer>
    </div>
  );
}
