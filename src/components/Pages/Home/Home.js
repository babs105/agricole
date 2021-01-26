import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, blocDescription1, blocDescription2 } from "./Data";
import BlocTextSection from "../../BlocTextSection";
import CardService from "../../CardService";
import Footer from "../../Footer";
import FormContact from "../../FormContact";
import NavBar from "../../NavBar";
function Home() {
  return (
    <>
      <NavBar />
      <main
        className={
          "bg-gray-200 font-quicksand flex flex-col justify-center items-center "
        }
      >
        <HeroSection {...homeObjOne} />
        <h1 className="text-3xl font-bold mt-16 text-indigo-600" id="service">
          Services
        </h1>
        <BlocTextSection {...blocDescription1} />
        <BlocTextSection {...blocDescription2} />
        <CardService />
        <FormContact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
