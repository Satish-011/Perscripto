import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-12 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="w-36 mb-5" />
          <p className="text-gray-600 leading-6 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-5">CONTACT US</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>example@email.com</li>
          </ul>
        </div>
      </div>

      <hr className="my-8" />

      <p className="text-center text-sm text-gray-500 py-4">
        Copyright © 2026 Prescripto - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
