import React from "react";
import { Input, Button, ButtonGroup, RadioGroup, Radio, Link } from "@nextui-org/react";

const Login = () => {
  const [selected, setSelected] = React.useState("femenino");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex justify-center flex-col items-center light text-foreground py-11 lg:pt-0">
          <h1 className="text-5xl font-bold mb-3 text-purple-950">
            Inicia sesión
          </h1>
          <p className="text-center text-foreground/50 mb-6">
            Aprende a tu ritmo
          </p>
          <form className="p-6 lg:p-0 lg:w-[55%]" action="">

            <Input
              size="sm"
              label="Correo electrónico"
              type="email"
              className="mb-4"
            />


            <Input
              size="sm"
              label="Contraseña"
              type="password"
              className="mb-4"
            />

            <Button color="secondary" fullWidth radius="sm">
              Login
            </Button>

            <p className="text-center mt-4">
                ¿No tienes una cuenta?{" "}
                <Link color="secondary" href="#">
                  Registrate
                </Link>
            </p>

            <p className="text-center mt-4 text-foreground/50">
                Al iniciar sesión, aceptas nuestros{" "}
                <Link color="secondary" href="#">
                    términos y condiciones
                </Link>{" "}
                y{" "}
                <Link color="secondary" href="#">
                    política de privacidad
                </Link>
            </p>
          </form>
        </div>
        <div className="text-center md:text-left ilustration-register">
          <h3 className="text-5xl p-4 font-bold">EduQuest.com</h3>
          <div className="flex flex-col justify-center items-center mt-32">
            <p className=" mt-4">
              Aprende a tu ritmo, con los mejores tutores de la región.
            </p>
            <ButtonGroup className="mt-8">
              <Button isDisabled color="success" variant="flat">
                Tutorial
              </Button>
              <Button isDisabled color="success">Empieza ahora</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
