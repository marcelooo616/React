import { BrowserRouter, Routes, Route } from "react-router-dom";
import './home.css';
import Menu from "./components/navbar/Menu";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import TeamSection from "./components/TeamSection/TeamSection";
import Banner from "./components/home/Banner";

export default function App() {
  return (
    <div>
      <Menu />
      
      <BrowserRouter>
          <Routes>
              <Route path="/"  element={<Banner/>}></Route>
              <Route path="/features"  element={<FeaturesSection/>}></Route>
              <Route path="/services"  element={<ServicesSection />}></Route>
              <Route path="/portfolio"  element={<PortfolioSection />}></Route>
              <Route path="/testimonials"  element={<TestimonialsSection />}></Route>
              <Route path="/team"  element={<TeamSection />}></Route>
          </Routes>
      </BrowserRouter>
     
      
      
     
      
    </div>
  );
}
