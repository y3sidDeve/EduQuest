/**
 * Login component for the EduQuest application.
 * Allows users to log in to their accounts.
 */
import React from "react";
import { Input, Button, Checkbox, Image } from "@nextui-org/react";
import InputPsw from "../../components/common/InputPsw";
import { Link as RouterLink } from "react-router-dom";
import logo_black from "../../assets/images/logo_purple.svg";
import { ArrowRight } from "../../icons/Icons";

// importamos la función login de user_api
import { loginStudent } from "../../services/user_api";

// importaciones de react-router-dom
import { useNavigate } from "react-router-dom";

// importaciones de react-hook-form
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  document.title = "EduQuest | Iniciar sesión";

  const { register, handleSubmit } = useForm();

  // creamos la constante navigate para poder redirigir al usuario a otra página
  const navigate = useNavigate();

  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  // función para manejar el submit del formulario
  const onSubmitCustom = handleSubmit(async (data) => {
    try {
      // llamamos a la función loginStudent y le pasamos los datos del formulario
      const responseData = await loginStudent(data);
      setResponse(responseData);
      console.log(responseData);
      
    } catch (error) {
      setError(error.response.data.mensaje);
    }
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex flex-col items-center p-5 lg:p-0 lg:mt-36 light text-foreground">
          <div className="gap-2 pb-11 flex flex-col justify-center items-center">
            <Image src={logo_black} width={90} />
            <h1 className="text-2xl font-bold text-purple-600">
              Bienvenido de nuevo!
            </h1>
            <p className="text-sm text-foreground/50">
              Inicia sesión en tu cuenta de EduQuest.com
            </p>
          </div>
          <form onSubmit={onSubmitCustom} className="lg:w-[40%] " action="">
            <Input
              size="sm"
              label="Correo electrónico"
              type="email"
              className="mb-6"
              {...register("email")}
            />

            <InputPsw
              size="sm"
              label="Contraseña"
              type="password"
              className=" mb-96"
              {...register("password")}
            />
            {
              // si hay un error en la autenticación, se muestra el mensaje de error
              error && <p className="text-red-500 text-sm">{error}</p>
            }
            <div className="my-8 flex justify-between">
              <Checkbox color="secondary" defaultSelected>
                {" "}
                Recuerdame
              </Checkbox>

              <RouterLink
                to="/forgot-password"
                className="text-foreground/50 text-sm hover:text-purple-500"
              >
                ¿Olvidaste tu contraseña?
              </RouterLink>
            </div>

            <Button color="secondary" fullWidth type="submit" radius="sm">
              Login
              <ArrowRight className="size-5" />
            </Button>

            <p className="text-center mt-4 text-sm text-foreground/50">
              Al registrarte, aceptas nuestros{" "}
              <RouterLink className="font-semibold text-purple-500" href="#">
                Términos y condiciones
              </RouterLink>{" "}
              y{" "}
              <RouterLink className="font-semibold text-purple-500" href="#">
                Política de privacidad
              </RouterLink>
            </p>

            <p className="text-center mt-4 text-sm">
              ¿No tienes una cuenta?{" "}
              <RouterLink className="text-purple-600" to="/register-student">
                Registrate
              </RouterLink>
            </p>
          </form>
        </div>
        <div className="text-center md:text-left ilustration-register">
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

export default Login;
