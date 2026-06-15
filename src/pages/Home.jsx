import Header from "../components/HomepageComponents/Header";
import Speciality from "../components/HomepageComponents/Speciality";
import TopDoctors from "../components/HomepageComponents/TopDoctors";
import AppointmentBanner from "../components/HomepageComponents/AppointmentBanner";
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
