import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const handleLoadMore = () => {
    navigate("/doctors");
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900">
      <h3 className="text-3xl font-semibold">Top Doctors to Book</h3>

      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-8">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            <img
              className="w-full bg-blue-50 object-cover"
              src={item.image}
              alt={item.name}
            />

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-green-500 text-xs font-medium">Available</p>
              </div>

              <h3 className="text-gray-900 font-semibold text-base">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
      >
        Load More
      </button>
    </div>
  );
};

export default TopDoctors;
