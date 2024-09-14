import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      hello how are you
    </div>
  );
};

export default page;
