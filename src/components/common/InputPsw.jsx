import React, { forwardRef } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../icons/Icons";

const InputPsw = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      isRequired
      ref={ref}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="mb-4"
    />
  );
});

export default InputPsw;
