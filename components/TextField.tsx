import { ComponentProps, forwardRef } from "react";

type TextFieldType = "text" | "number" | "password";
type TextFieldSize = "sm" | "md" | "lg";
type TextFieldProps = ComponentProps<"div"> & {
  inputClass?: string;
  label?: string;
  type?: TextFieldType;
  size?: TextFieldSize;
  helpText?: string;
  isError?: boolean;
};

const baseStyle =
  "relative outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full";

const sizeStyle: {
  [key in TextFieldSize]: {
    label: string;
    input: string;
  };
} = {
  sm: {
    label: "text-sm",
    input: "p-2.5",
  },
  md: {
    label: "text-md",
    input: "p-4",
  },
  lg: {
    label: "text-lg",
    input: "p-5",
  },
};
const helpTextStyle = "absolute text-sm";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props, ref) {
    const {
      inputClass,
      label,
      type = "text",
      size = "md",
      helpText,
      isError = false,
      ...rest
    } = props;
    return (
      <div {...rest}>
        <label
          htmlFor={label}
          className={`${sizeStyle[size].label} block font-medium text-gray-900`}
        >
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={label}
          className={`${baseStyle} ${sizeStyle[size].input} ${
            isError ? "border-red-400" : ""
          } ${inputClass ?? ""}`}
        />
        <p className={`${helpTextStyle} ${isError ? "text-red-400" : ""}`}>
          {helpText}
        </p>
      </div>
    );
  }
);

export default TextField;
