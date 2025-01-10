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
          <p className="text-xl md:text-2xl">
            Leveraging AI, Machine Learning, and IoT for smarter, more efficient
            operations.
          </p>
        </div>
      </header>

      {/* AI and IoT Section */}
      <section className="container mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Leading with AI and IoT</h2>
          <p className="text-lg mb-4">
            In an industry where precision and reliability are paramount, we
            leverage AI and IoT technologies to deliver smarter, data-driven
            solutions.
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
              Examples include optimizing production strategies, predicting
              equipment failures, and enhancing reservoir performance with
              unmatched accuracy.
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
            At Codes and Cogs, innovation extends beyond operations—we are
            committed to empowering local talent through cutting-edge training
            programs.
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

      {/* Footer Section */}
      <footer className="bg-pry-color text-white py-6 text-center">
        <p className="text-lg">
          Let us work together to shape the future of oil and gas. Partner with
          us today.
        </p>
      </footer>
    </div>
  );
}
