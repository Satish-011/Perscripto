import React from "react";
import { assets } from "../assets/assets";
import Footer from "./Footer.jsx";

export default function AboutUs() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        ABOUT US
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={assets.about_image}
          alt="About Us"
          className="w-full rounded-xl shadow-lg"
        />

        <div className="text-gray-600 leading-7">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <br />

          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
            Our Vision
          </h2>

          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          WHY CHOOSE US
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="font-bold text-lg mb-3 text-blue-600">EFFICIENCY</h2>
            <p className="text-gray-600">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="font-bold text-lg mb-3 text-blue-600">
              CONVENIENCE
            </h2>
            <p className="text-gray-600">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="font-bold text-lg mb-3 text-blue-600">
              PERSONALIZATION
            </h2>
            <p className="text-gray-600">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
