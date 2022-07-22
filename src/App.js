import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Home from "./components/Home";
import About from "./components/About";
import JobProvider from "./components/JobProvider";
import JobSeeker from "./components/JobSeeker";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <main className="py-1">
          {/* <Navbar/> */}
        <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
          <Routes></Routes>
          <Routes>
            <Route path="/main" element={<Main/>} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Main/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <Routes>
            <Route path="/JobProvider" element={<JobProvider/>} />
          </Routes>
          <Routes>
            <Route path="/jobSeeker" element={<JobSeeker/>}/>
          </Routes>
          </main>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
