import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-blue-500 px-12 py-10 rounded-lg">
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-5xl font-bold text-white leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </h1>

        <div className="flex items-center gap-3">
          <img className="w-20" src={assets.group_profiles} alt="" />
          <p className="text-sm text-white">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#Speciality"
          className="bg-white text-gray-700 px-8 py-3 rounded-full w-fit flex items-center gap-2 hover:scale-105 transition-all"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      <div>
        <img className="w-125" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
