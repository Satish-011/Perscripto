import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const AppointmentWithDoctor = () => {
  const { doctorId } = useParams();
  const { doctors } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredDoctor = doctors.find((doctor) => doctor._id === doctorId);

  if (!filteredDoctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="px-4 md:px-10 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Doctor Image Section */}
        <div className="md:w-72 lg:w-80">
          <img
            src={filteredDoctor.image}
            alt={filteredDoctor.name}
            className="w-full rounded-lg bg-[#5f6FFF]"
          />
        </div>

        {/* Doctor Info Card */}
        <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white">
          {/* Name & Verified Badge */}
          <h1 className="flex items-center gap-2 text-3xl font-medium text-gray-900">
            {filteredDoctor.name}
            <svg
              className="w-6 h-6 text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.35 1.63 2.8-.46 1.15 2.62 2.76 1.05-.73 2.76 1.95 2.15-1.95 2.15.73 2.76-2.76 1.05-1.15 2.62-2.8-.46L12 22l-2.35-1.63-2.8.46-1.15-2.62-2.76-1.05.73-2.76L1.8 12l1.95-2.15-.73-2.76 2.76-1.05 1.15-2.62 2.8.46L12 2zm-1.15 11.83l-3.2-3.2-1.4 1.4 4.6 4.6 8-8-1.4-1.4-6.6 6.6z" />
            </svg>
          </h1>

          {/* Degree, Speciality & Experience */}
          <div className="flex items-center gap-2 text-sm mt-2 text-gray-600">
            <p>
              {filteredDoctor.degree} - {filteredDoctor.speciality}
            </p>
            <span className="border border-gray-300 px-2 py-0.5 rounded-full text-xs">
              {filteredDoctor.experience}
            </span>
          </div>

          {/* About Section */}
          <div className="mt-5">
            <h3 className="flex items-center gap-1 text-sm font-medium text-gray-900">
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </h3>
            <p className="text-sm text-gray-600 max-w-[700px] mt-2 leading-relaxed">
              {filteredDoctor.about}
            </p>
          </div>

          {/* Appointment Fee */}
          <p className="text-gray-600 font-medium mt-6">
            Appointment fee:{" "}
            <span className="text-gray-900 font-semibold">
              ${filteredDoctor.fees}
            </span>
          </p>
        </div>
      </div>
      <div>
        <h1>Booking Slots</h1>
        <div className="flex gap-4 flex-wrap">
          {Array.from({ length: 7 }, (_, i) => {
            const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
            const isActive = activeIndex === i;

            return (
              <button
                onClick={() => setActiveIndex(i)}
                key={i}
                className={`w-20 h-32 rounded-[40px] flex flex-col items-center justify-center border border-gray-300 ${
                  isActive ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                <span className="text-lg font-medium">
                  {date
                    .toLocaleDateString("en-US", { weekday: "short" })
                    .toUpperCase()}
                </span>
                <span className="text-2xl font-bold mt-2">
                  {date.getDate()}
                </span>
              </button>
            );
          })}
        </div>
        <div>
          {Array.from({ length: 15 }, (_, i) => {
            let time = 2 + i * 30;
            <button>{time}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentWithDoctor;
