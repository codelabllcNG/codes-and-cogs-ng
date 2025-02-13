import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
            Innovation. Sustainability. Excellence.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-12">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-bold text-blue-900">Codes and Cogs</span> is a
            Tech and Oilfield Services company at the forefront of innovation in
            the energy sector. We leverage advanced computing capabilities to
            provide cutting-edge solutions in areas such as well insight
            analysis, reservoir management, thru-tubing well intervention,
            non-destructive testing (NDT), slickline, coiled tubing, well
            testing, wellhead maintenance, and the provision of specialized
            tools and equipment.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mt-6">
            Our focus is on enabling safer, more efficient oil and gas
            production while minimizing carbon emissions and exploring
            alternative energy solutions. Beyond operations, we are dedicated to
            developing world-class training tools for the oil and gas sector and
            connecting businesses with top-tier talent globally through our
            rigorous recruitment processes.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mt-6">
            At <span className="font-bold text-blue-900">Codes and Cogs</span>,
            we are committed to driving innovation, sustainability, and
            excellence in energy production and workforce development.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-900">
              Innovation in Energy
            </h3>
            <p className="text-gray-600 mt-4">
              Advanced solutions in well insight analysis and reservoir
              management.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-900">
              Sustainability Focus
            </h3>
            <p className="text-gray-600 mt-4">
              Enabling efficient oil production while reducing carbon emissions.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-900">
              Workforce Excellence
            </h3>
            <p className="text-gray-600 mt-4">
              Connecting businesses with top-tier talent through rigorous
              recruitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
