import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
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
          {/* Zoho Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form
              action="https://forms.zohopublic.com/clpphonesystemsgm1/form/CodesandCogsContactUsForm/formperma/UO7RSr-PxFVmY5D3J2ukqacMdid_nrKku0uhxa6pK-M/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="zf_referrer_name"
                value="Codes and Cogs"
              />
              <input
                type="hidden"
                name="zf_redirect_url"
                value="www.codesandcogs.com"
              />
              <input type="hidden" name="zc_gad" value="" />

              {/* Change: Added grid for name inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Name_First"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="Name_First"
                    name="Name_First"
                    maxLength="255"
                    className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Name_Last"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="Name_Last"
                    name="Name_Last"
                    maxLength="255"
                    className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Rest of the form remains the same */}
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  maxLength="255"
                  className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="MultiLine"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="MultiLine"
                  name="MultiLine"
                  maxLength="65535"
                  rows={5}
                  className="p-2 border-none mt-1 block w-full rounded-md focus:outline-none shadow-sm text-base resize-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-md shadow text-white bg-pry-color hover:bg-pry-color focus:ring-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-pry-color text-white rounded-full">
                <HiOutlineMail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  Email
                </h4>
                <p className="text-base sm:text-lg text-gray-600">
                  info@codesandcogs.com
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
                  Ibeju Junction, Lekki-Ekpe Expressway, Lekki-Ekpe, Lagos State
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
