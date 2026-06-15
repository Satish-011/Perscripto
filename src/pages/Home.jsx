import Header from "../components/Header";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";
import AppointmentBanner from "../components/AppointmentBanner";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20">
      <Header />
      <Speciality />
      <TopDoctors />
      <AppointmentBanner />
      <Footer />
    </div>
  );
};

export default Home;
