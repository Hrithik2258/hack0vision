import React from "react";
import { Brand, CTA, Navbar, Register, Useless } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Hackovision,
  Qr,
  PaymentLayout,
  Mentor,
  Card,
  Animated,
  Kavita,
} from "./containers";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <Features />
        </div>

        <Hackovision />
        <PaymentLayout />
        <Brand />
        <Routes>
          <Route path="/kavita" element={<Kavita />} />
        </Routes>

        {/* <Mentor/> */}
        <Card />
        <Possibility />

        {/* <Animated/> */}

        <Register />
        <Qr />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
