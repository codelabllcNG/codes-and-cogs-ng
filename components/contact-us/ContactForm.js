import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const ContactForm = () => {
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
    <div className="grid place-items-center items-center mt-10">
      {/* Form */}
      <div className="bg-white shadow-md rounded-lg p-8 min-w-[80%]">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-left"
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
              className="block text-left text-sm font-medium text-gray-700"
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
              className="block text-left text-sm font-medium text-gray-700"
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
    </div>
  );
};

export default ContactForm;
