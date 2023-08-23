import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Footer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SolutionsOffered from "./pages/SolutionOffered";
import Enquiry from "./pages/Enquiry";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex w-max-screen  flex-col bg-[#1e1e1e] scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col w-full">
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/contactUs" Component={ContactUs}></Route>
            <Route path="/aboutUs" Component={AboutUs}></Route>
            <Route path="/enquiry" Component={Enquiry}></Route>
            <Route
              path="/solution-offered"
              Component={SolutionsOffered}
            ></Route>
          </Routes>
        </div>
        <div className="md:px-20 px-8">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
