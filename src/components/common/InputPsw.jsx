import React from "react";
import {Input} from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon  } from "../../icons/Icons";

export default function InputPsw(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
        {...props}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
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
}
