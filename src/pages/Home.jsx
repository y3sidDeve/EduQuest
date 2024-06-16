import React from "react";
import Navbar from "../components/common/Navbar";
import smartImg from "../assets/images/smartphone_ilu.svg";
import GroupCards from "../components/common/GroupCards";

import { dataCards } from "../data/data";

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
                Empieza ahora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="text-center flex justify-center lg:text-right mt-11">
            <img src={smartImg} alt="smartphone" />
          </div>
        </div>

        <div className="mt-40 container mx-auto flex justify-center">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <GroupCards dataCards={dataCards} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
