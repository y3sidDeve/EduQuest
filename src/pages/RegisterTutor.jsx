import React from "react";
import { Input, Button, RadioGroup, Radio } from "@nextui-org/react";

import InputPsw from "../components/common/InputPsw";
import SelectChip from "../components/common/SelectChip";

import { Link as RouterLink } from "react-router-dom";
import { Link as NextUILink, Textarea, Image } from "@nextui-org/react";

import { useForm, Controller, useWatch } from "react-hook-form";

import { createTutor } from "../services/user_api";
import logo_white from "../assets/images/logo_white.svg";

const RegisterTutor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const password = useWatch({ name: "password", control });

  const onSubmitCustom = handleSubmit((data) => {
    delete data.passwordConfirm;
    data.rol = parseInt(data.rol);

    createTutor(data);
    navigate("/login");
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex justify-center flex-col items-center light text-foreground py-11 lg:pt-0">
          <h1 className=" text-5xl text-center font-bold my-3 text-teal-900">
            Enseña y aprende
          </h1>
          <p className="text-center text-foreground/50 mb-6">
            comparte tus conocimientos en{" "}
            <RouterLink to="/">
              <span className="font-semibold text-teal-400"> EduQuest.com</span>
            </RouterLink>
          </p>
          <form
            onSubmit={onSubmitCustom}
            className="p-6 lg:p-0 lg:w-[55%]"
            action=""
          >
            <Input
              type="hidden"
              value={2}
              {...register("rol", { required: true })}
            />
            <div className="flex w-full flex-wrap md:flex-nowrap mb-1 md:mb-3 gap-4">
              <Input
                isRequired
                size="sm"
                label="Nombre"
                type="text"
                {...register("name", { required: true })}
              />
              <Input
                isRequired
                size="sm"
                label="Apellido"
                type="text"
                {...register("lastname", { required: true })}
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
                {...register("phone", { required: true })}
              />
              <Input
                size="sm"
                label="Fecha de nacimiento"
                type="date"
                className="mb-4"
                {...register("date", { required: true })}
              />
            </div>

            <SelectChip />

            <Controller
              name="gender"
              control={control}
              defaultValue="femenino"
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup
                  label="Selecciona tu género"
                  orientation="horizontal"
                  color="success"
                  className="mb-8"
                  {...field}
                >
                  <Radio value="femenino">Femenino</Radio>
                  <Radio value="masculino">Masculino</Radio>
                  <Radio value="n/a">Prefiero no decirlo</Radio>
                </RadioGroup>
              )}
            />

            <Textarea
              label="Descripción"
              placeholder="Escribe una breve descripción sobre ti"
              className=" mb-3"
              
            />

            <InputPsw
              size="sm"
              label="Contraseña"
              className="mb-8"
              {...register("password", { required: true, minLength: 6 })}
            />

            <InputPsw
              size="sm"
              label="Confirmar contraseña"
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
                  {errors.passwordConfirm.message}
                </span>
              )
            )}

            <Button
              className="mt-1 bg-teal-600 text-white"
              type="submit"
              fullWidth
              radius="sm"
            >
              Registrarse
            </Button>

            {/* ESPACIO PARA EL MODAL */}

            <p className="text-center mt-4">
              ¿Ya tienes una cuenta de Tutor?{" "}
              <RouterLink className="font-semibold text-teal-400" to="/login">
                Inicia sesión
              </RouterLink>
            </p>

            <p className="text-center mt-4 text-foreground/50">
              Al registrarte, aceptas nuestros{" "}
              <NextUILink className="font-semibold text-teal-500" href="#">
                Términos y condiciones
              </NextUILink>{" "}
              y{" "}
              <NextUILink className="font-semibold text-teal-500" href="#">
                Política de privacidad
              </NextUILink>
            </p>
          </form>
        </div>
        <div className="text-center md:text-left ilustration-register2">
          <div className="flex p-4 justify-between px-9">
            <h3 className="text-5xl mt-4 font-bold">EduQuest.com</h3>
            <Image
              width={60}
              alt="NextUI hero Image"
              src={logo_white}
            />
          </div>

          <div className="container flex justify-center">
            <h1 className=" font-sans text-lg">
              Si te gusta enseñar y tienes conocimientos en alguna materia,
              ¡Regístrate como tutor!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterTutor;
