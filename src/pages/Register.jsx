import React from "react";
import {
  Input,
  Button,
  ButtonGroup,
  RadioGroup,
  Radio,
  Link,
} from "@nextui-org/react";

import { useForm, Controller } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmitCustom = handleSubmit((data) => {
    console.log(data);

    data.passwordConfirm === data.password
      ? alert("Registro exitoso")
      : alert("Las contraseñas no coinciden");
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-[100vh] dark text-foreground">
        <div className="flex justify-center flex-col items-center light text-foreground py-11 lg:pt-0">
          <h1 className="text-5xl font-bold mb-3 text-purple-950">
            Regístrate
          </h1>
          <p className="text-center text-foreground/50 mb-6">
            Y comienza a disfrutar de los beneficios de EduQuest.com
          </p>
          <form
            onSubmit={onSubmitCustom}
            className="p-6 lg:p-0 lg:w-[55%]"
            action=""
          >
            <div className="flex w-full flex-wrap md:flex-nowrap mb-4 md:mb-8 gap-4">
              <Input
                size="sm"
                label="Nombre"
                type="text"
                {...register("name", { required: true })}
              />
              <Input
                size="sm"
                label="Apellido"
                type="text"
                {...register("lastname", { required: true })}
              />
            </div>
            <Input
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

            <Controller
              name="gender"
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

            <Input
              size="sm"
              label="Contraseña"
              type="password"
              className="mb-4"
              {...register("password", { required: true })}
            />
            <Input
              size="sm"
              label="Confirmar contraseña"
              type="password"
              className="mb-4"
              {...register("passwordConfirm", { required: true })}
            />

            <Button type="submit" color="secondary" fullWidth radius="sm">
              Registrarse
            </Button>

            <p className="text-center mt-4">
              ¿Ya tienes una cuenta?{" "}
              <Link color="secondary" href="#">
                Inicia sesión
              </Link>
            </p>

            <p className="text-center mt-4 text-foreground/50">
              Al registrarte, aceptas nuestros{" "}
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
              <Button isDisabled color="success">
                Empieza ahora
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
