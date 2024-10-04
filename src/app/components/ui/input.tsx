"use client";

import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { KeyboardEvent, useState } from "react";

type props = {
  type?: string;
  onEnter?: () => void;
  placeholder?: string;
  value?: string;
  onChange?: (newVaue: string) => void;
  icon?: IconDefinition;
  password?: boolean;
  accept?: string
};
export const Input = ({
  type,
  onEnter,
  placeholder,
  value,
  onChange,
  icon,
  password,
  accept,
}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.code.toLocaleLowerCase() === "enter" && onEnter) ||
      (e.code.toLowerCase() === "numpadenter" && onEnter)
    ) {
      onEnter();
    }
  };
  return (
    <div className="has-[:focus]:border-gray-200 border-2 border-gray-500 h-12 flex items-center   rounded-3xl flex-grow mb-4 mx-2 ">
      <input
        type={password && !showPassword ? "password" : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="px-4 h-full bg-transparent outline-0 w-full p-2"
        onKeyUp={handleKeyUp}
        accept={accept}
      />
      {icon && <FontAwesomeIcon icon={icon} className="mx-4 text-gray-500 " />}

      {password && (
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};
