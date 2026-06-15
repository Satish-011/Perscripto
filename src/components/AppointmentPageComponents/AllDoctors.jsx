import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../../assets/assets";

const AllDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  const filteredDoctors = selectedSpeciality
    ? doctors.filter((doctor) => doctor.speciality === selectedSpeciality)
    : doctors;

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-10 py-10">
      <div className="w-full lg:w-64">
        <p className="text-gray-700 text-lg mb-5">
          Browse through the doctors specialist.
        </p>

        <div className="flex flex-col gap-3">
          {specialityData.map((elem, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
            >
              <button
                onClick={() => {
                  navigate(`/doctors?speciality=${elem.speciality}`);
                  setSelectedSpeciality(elem.speciality);
                }}
                className="w-full text-left text-gray-700"
              >
                {elem.speciality}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((elem, idx) => (
            <div
              onClick={() => {
                navigate(`/appointments/${elem._id}`);
              }}
              key={idx}
              className="border border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={elem.image}
                alt={elem.name}
                className="w-full bg-blue-50"
              />

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-green-500 text-xs">Available</p>
                </div>

                <h3 className="text-lg font-medium text-gray-900">
                  {elem.name}
                </h3>

                <p className="text-sm text-gray-500">{elem.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
