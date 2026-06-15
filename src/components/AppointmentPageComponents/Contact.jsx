import React from "react";
import { assets } from "../../assets/assets";
import Footer from "../Footer.jsx";

const Contact = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        CONTACT US
      </h1>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Contact Info */}
        <div className="bg-white border rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">OUR OFFICE</h2>

          <div className="space-y-4 text-gray-600 leading-7">
            <p>
              00000 Willms Station <br />
              Suite 000, Washington, USA
            </p>

            <p>
              <span className="font-semibold text-gray-800">Tel:</span> (000)
              000-0000
            </p>

            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              greatstackdev@gmail.com
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              CAREERS AT PRESCRIPTO
            </h3>

            <p className="text-gray-600 mb-5">
              Learn more about our teams and current job openings.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
