import React from "react";
import Navbar from "../components/common/Navbar";
import smartImg from "../assets/images/smartphone_ilu.svg";
import studyImg from "../assets/images/study_ilu.svg";

import { Button } from "@nextui-org/react";

const Home = () => {
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

              <Button color="danger" size="lg">
                Iniciar Sesión
              </Button>
            </div>
          </div>

          <div className="text-center flex justify-center lg:text-right mt-11">
            <img src={smartImg} alt="smartphone" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
