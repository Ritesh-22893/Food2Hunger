import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Marketplace from "./Pages/Marketplace";
import ContactUs from "./Pages/ContactUs";
import NgoLoginForm from "./Components/PageComponents/NgoLoginPage/Ngologinform";
import RegisterForms from "./Components/PageComponents/Registerpage/RegisterFroms";
import FoodForm from "./Components/PageComponents/FoodDonationPage/FoodDonationPage";
import NewDashboard from "./Components/PageComponents/NGO_Dashboard/NewDashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Marketplace" element={<Marketplace />}></Route>
          <Route path="/Contactus" element={<ContactUs />}></Route>
          <Route path="/Ngologinform" element={<NgoLoginForm />}></Route>
          <Route path="/Registerform" element={<RegisterForms />}></Route>
          <Route path="/Donatepage" element={<FoodForm/>}></Route>
          <Route path="/Dashboard" element={<NewDashboard/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
