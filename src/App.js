import "./styles/main.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import  Projects from "./pages/Projects";
import Project from "./pages/project";
import { Contacts } from "./pages/Contacts";
import  ScrollToTop  from "./utils/ScrollToTop";


function App() {
  return (
    <div className="App">
			<Router basename='/Portfoli023'>
				< ScrollToTop/>
      <Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={ <Projects/>} />
				<Route path="/project/:id" element={<Project/>} />
				<Route path="/contacts" element={<Contacts/>} />
			</Routes>
      <Footer />
			</Router>
    </div>
  );
}

export default App;
