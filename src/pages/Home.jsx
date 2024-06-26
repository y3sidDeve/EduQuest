import React from "react";
import Navbar from "../components/common/Navbar";
import smartImg from "../assets/images/smartphone_ilu.svg";
import GroupCards from "../components/common/GroupCards";
import { ArrowRight } from "../icons/Icons";

import { dataCards } from "../data/data";
import { Link } from "react-router-dom";

import { Button } from "@nextui-org/react";
import Footer from "../components/common/Footer";

const Home = () => {
  document.title = "EduQuest | Inicio - Aprende a tu ritmo!";
  return (
    <>
      <Navbar />
      <div className="contenedor-home h-[90vh] dark text-foreground">
        <div className="container lg:columns-2 mx-auto pt-40">
          <div className="text-center mt-11 lg:text-left title-group">
            <h1 className="text-5xl font-bold">Aprende a tu ritmo!</h1>
            <p className="text-2xl mt-4">
              puedes contratar servicios de enseñanza, con tutores altamente
              califcados, desde la comodidad de tu hogar.
            </p>

            <div className="mt-8">
              <Button color="danger" variant="flat" size="lg" className="mr-2">
                Tutorial
              </Button>

              <Link to="register-student/">
                <Button color="danger" size="lg">
                  Empieza ahora
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center flex justify-center lg:text-right mt-11">
            <img src={smartImg} alt="smartphone" />
          </div>
        </div>

        <div className=" m-32 container mx-auto flex justify-center">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <GroupCards dataCards={dataCards} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
