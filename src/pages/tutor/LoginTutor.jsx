import React from "react";
import { Input, Button, Checkbox, Image } from "@nextui-org/react";
import InputPsw from "../../components/common/InputPsw";

import { Link as RouterLink } from "react-router-dom";
import logo_teal from "../../assets/images/logo_teal.svg";

import { ArrowRight } from "../../icons/Icons";

const LoginTutor = () => {
  document.title = "EduQuest | Iniciar sesión";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex flex-col items-center p-5 lg:p-0 lg:mt-36 light text-foreground">
          <div className="gap-2 pb-11 flex flex-col justify-center items-center">
            <Image src={logo_teal} width={90} />
            <h1 className="text-2xl font-bold text-teal-600">
              Bienvenido de nuevo!
            </h1>
            <p className="text-sm text-foreground/50">
              Inicia sesión en tu cuenta de EduQuest.com
            </p>
          </div>
          <form className="lg:w-[40%] " action="">
            <Input
              size="sm"
              label="Correo electrónico"
              type="email"
              className="mb-6"
            />

            <InputPsw
              size="sm"
              label="Contraseña"
              type="password"
              className=" mb-96"
            />

            <div className="my-8 flex justify-between">
              <Checkbox color="success"  defaultSelected>
                {" "}
                Recuerdame
              </Checkbox>

              <RouterLink
                to="/forgot-password"
                className="text-foreground/50 text-sm hover:text-teal-500"
              >
                ¿Olvidaste tu contraseña?
              </RouterLink>
            </div>

            <Button
              color="success"
              className="bg-teal-600 text-white"
              fullWidth
              radius="sm"
            >
              Login
              <ArrowRight className="size-5" />
            </Button>

            <p className="text-center mt-4 text-sm text-foreground/50">
              Al registrarte, aceptas nuestros{" "}
              <RouterLink className="font-semibold text-teal-500" href="#">
                Términos y condiciones
              </RouterLink>{" "}
              y{" "}
              <RouterLink className="font-semibold text-teal-500" href="#">
                Política de privacidad
              </RouterLink>
            </p>

            <p className="text-center mt-4 text-sm">
              ¿No tienes una cuenta?{" "}
              <RouterLink
                className="text-teal-500 font-semibold"
                to="/register-student"
              >
                Registrate
              </RouterLink>
            </p>
          </form>
        </div>
        <div className="text-center md:text-left ilustration-register3">
          <h3 className="text-5xl p-4 font-bold">EduQuest.com</h3>
          <div className="flex flex-col justify-center items-center mt-32">
            <p className=" mt-4">
              Aprende a tu ritmo, con los mejores tutores de la región.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginTutor;
