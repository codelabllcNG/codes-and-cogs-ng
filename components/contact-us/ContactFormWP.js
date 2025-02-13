import { useState } from "react";
import toast from "react-hot-toast";

const ContactFormWP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_role: "",
    company: "",
    email: "",
  });

  const [emailError, setEmailError] = useState("");

  const personalDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "zoho.com",
    "yandex.com",
    "mail.com",
    "test.com",
  ];

  const isPersonalEmail = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return personalDomains.includes(domain);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Push event to the GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whitepaper_form_submit",
      form_name: "Advancing PCE integrity Testing",
    });

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear email error when user starts typing
    if (name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate work email
    if (formData.email && isPersonalEmail(formData.email)) {
      setEmailError(
        "Please use your work email address. Personal email domains are not accepted."
      );
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/whitepaper`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      toast.success("Form submitted successfully!");
      console.log("Form submitted:", formData);

      // Reset form data
      setFormData({
        first_name: "",
        last_name: "",
        job_role: "",
        company: "",
        email: "",
      });
      setEmailError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-[830px] mx-auto mt-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-[rgba(46,49,146,1)] mb-12 text-center whitespace-nowrap">
        Download Whitepaper
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
        <aside className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="mb-1 text-sm">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="last_name" className="mb-1 text-sm">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </aside>

        <aside className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="job_role" className="mb-1 text-sm">
              Job Role<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="job_role"
              name="job_role"
              value={formData.job_role}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-1 text-sm">
              Company Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </aside>

        <aside className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm">
            Work Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`border ${emailError ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </aside>

        <aside className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[rgba(46,49,146,1)] text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit Request"}
          </button>
        </aside>
      </form>
    </section>
  );
};

export default ContactFormWP;
