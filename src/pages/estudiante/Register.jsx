import React from "react";
import { Input, Button, RadioGroup, Radio } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

import InputPsw from "../../components/common/InputPsw";
import { createStudent } from "../../services/user_api";

import { Link as RouterLink } from "react-router-dom";
import { Link as NextUILink } from "@nextui-org/react";

import { useForm, Controller, useWatch } from "react-hook-form";

const Register = () => {
  document.title = "EduQuest | Registro";
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  const password = useWatch({ name: "password", control });

  const onSubmitCustom = handleSubmit(async (data) => {
    delete data.passwordConfirm;
    data.rol = parseInt(data.rol);

    try {
      const responseData = await createStudent(data);
      setResponse(responseData);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.Mensaje);
    }
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex justify-center flex-col items-center light text-foreground py-11 lg:pt-0">
          <h1 className="text-5xl font-bold mb-3 text-purple-950">
            Regístrate
          </h1>
          <p className="text-center text-foreground/50 mb-6">
            Y comienza a disfrutar de los beneficios de{" "}
            <RouterLink to="/">
              <span className="font-semibold text-purple-500">
                {" "}
                EduQuest.com
              </span>
            </RouterLink>
          </p>
          <form
            onSubmit={onSubmitCustom}
            className="p-6 lg:p-0 lg:w-[55%]"
            action=""
          >
            <Input
              type="hidden"
              value={3}
              {...register("rol", { required: true })}
            />
            <div className="flex w-full flex-wrap md:flex-nowrap mb-4 md:mb-8 gap-4">
              <Input
                isRequired
                size="sm"
                label="Nombre"
                type="text"
                {...register("nombre", { required: true })}
              />
              <Input
                isRequired
                size="sm"
                label="Apellido"
                type="text"
                {...register("apellido", { required: true })}
              />
            </div>
            <Input
              isRequired
              size="sm"
              label="Correo electrónico"
              type="email"
              className="mb-4"
              {...register("email", { required: true })}
            />
            <div className="flex w-full gap-4 flex-wrap md:flex-nowrap mb-4">
              <Input
                size="sm"
                label="Teléfono"
                type="tel"
                className="mb-4"
                {...register("telefono", { required: true })}
              />
              <Input
                size="sm"
                label="Fecha de nacimiento"
                type="date"
                className="mb-4"
                {...register("fecha_nacimiento", { required: true })}
              />
            </div>

            <Controller
              name="genero"
              control={control}
              defaultValue="femenino"
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup
                  label="Selecciona tu género"
                  orientation="horizontal"
                  color="secondary"
                  className="mb-8"
                  {...field}
                >
                  <Radio value="femenino">Femenino</Radio>
                  <Radio value="masculino">Masculino</Radio>
                  <Radio value="n/a">Prefiero no decirlo</Radio>
                </RadioGroup>
              )}
            />

            <InputPsw
              size="sm"
              label="Contraseña"
              type="password"
              className="mb-8"
              {...register("password", { required: true, minLength: 6 })}
            />

            <InputPsw
              size="sm"
              label="Confirmar contraseña"
              type="password"
              className="mb-4"
              {...register("passwordConfirm", {
                required: true,
                minLength: 6,
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
              })}
            />

            {errors.password ? (
              <span className="text-red-500 text-sm bg-red-100 inline rounded-md p-0.5 my-1">
                La contraseña debe tener al menos 6 caracteres
              </span>
            ) : (
              errors.passwordConfirm && (
                <span className="text-red-500 text-sm bg-red-100 inline rounded-md p-0.5 my-1">
                  Las contraseñas no coinciden
                </span>
              )
            )}

            {error && (
              <span className="text-red-500 text-sm bg-red-100 inline rounded-md p-0.5 my-1">
                {error}
              </span>
            )}

            <Button
              className="mt-1"
              type="submit"
              color="secondary"
              fullWidth
              radius="sm"
            >
              Registrarse
            </Button>

            {/* ESPACIO PARA EL MODAL */}

            <p className="text-center mt-4">
              ¿Ya tienes una cuenta?{" "}
              <RouterLink to="/login" className="font-semibold text-purple-500">
                Inicia sesión
              </RouterLink>
            </p>
            <RouterLink
              to="/register-tutor"
              className="text-purple-500/70 font-bold text-center block"
            >
              Se un tutor
            </RouterLink>

            <p className="text-center mt-4 text-foreground/50">
              Al registrarte, aceptas nuestros{" "}
              <NextUILink className="font-semibold" color="secondary" href="#">
                Términos y condiciones
              </NextUILink>{" "}
              y{" "}
              <NextUILink className="font-semibold" color="secondary" href="#">
                Política de privacidad
              </NextUILink>
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

export default Register;
