import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const AppointmentBanner = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/login");
  };

  return (
    <div className="bg-indigo-500 rounded-xl px-8 md:px-14 lg:px-20 my-20 flex flex-col md:flex-row items-center md:items-stretch justify-between overflow-hidden">
      <div className="text-white py-12 md:py-16 lg:py-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment
          <br />
          With 100+ Trusted Doctors
        </h1>

        <button
          onClick={handleCreateAccount}
          className="bg-white text-gray-700 px-6 py-3 rounded-full mt-8 hover:scale-105 transition-all"
        >
          Create account
        </button>
      </div>

      <div className="md:w-1/2 relative flex justify-center md:justify-end">
        <img
          src={assets.appointment_img}
          alt="appointment banner"
          className="w-full max-w-md md:absolute bottom-0 right-0 h-auto"
        />
      </div>
    </div>
  );
};

export default AppointmentBanner;
