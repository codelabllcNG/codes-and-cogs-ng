import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SERVICES } from "../../a-store/content-store/SERVICES";

const Services = () => {
  const [service, setService] = useState({});
  const router = useRouter();
  console.log(SERVICES);
  console.log(service);

  useEffect(() => {
    const service = SERVICES.find((service) => service.id == router.query.id);
    console.log("service from effect", service);
    setService(service);
  }, [router]);
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {service?.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: service?.content?.replace(/\n/g, "<br />"),
          }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed"
        ></div>
      </div>
    </section>
  );
};

export default Services;
