import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    fetch(
      `${process.env.NEXT_PUBLIC_DEV_API_BASE}/api/codesandcogs/v1/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit the form");
        }
        return response.json();
      })
      .then((data) => {
        alert("Form submitted successfully.");
        // console.log("Form submitted successfully:", data);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error sending your message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16 pb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We&#39;d love to hear from you. Fill out the form
            below or reach out to us directly.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base resize-none"
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div>
                <button
                  disabled={loading}
                  onClick={submitHandler}
                  type="submit"
                  className={`w-full py-2 px-4 rounded-md shadow text-white 
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-pry-color hover:bg-pry-color focus:ring-2"
    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-pry-color text-white rounded-full">
                <FiPhone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div> */}

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-pry-color text-white rounded-full">
                <HiOutlineMail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  Email
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  info@cogsandcogs.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-pry-color text-white rounded-full">
                <HiOutlineLocationMarker className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  Address
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  Jonnie Estate, Shaba Adams Street Jedo, Lugbe, Abuja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
