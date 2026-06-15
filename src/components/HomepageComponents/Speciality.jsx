import { specialityData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div id="Speciality" className="flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-semibold text-gray-900">
        Find by Speciality
      </h1>

      <p className="max-w-md text-center text-gray-600 text-base leading-7 mt-4">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="flex justify-center flex-wrap gap-8 md:gap-12 pt-10 w-full">
        {specialityData.map((ele, idx) => (
          <Link key={idx} to={`/doctor/${ele.speciality}`} className="group">
            <div className="flex flex-col items-center w-28">
              <div className="bg-slate-100 rounded-full p-3">
                <img
                  className="w-20 sm:w-24 group-hover:-translate-y-2 transition-all duration-300"
                  src={ele.image}
                  alt={ele.speciality}
                />
              </div>

              <p className="mt-4 text-sm sm:text-base font-medium text-center text-gray-800">
                {ele.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
