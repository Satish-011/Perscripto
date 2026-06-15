import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctors";
import Profile from "./pages/MyProfile";
import Appointment from "./pages/Appointments";
import MyAppointments from "./pages/MyAppointments";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
        <Route path="/appointments/:doctorId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
