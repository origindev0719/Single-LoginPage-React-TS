import React from "react";

type FormInputProps = {
  placeholder?: string;
  id?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = (props) => {
  const baseClassNames =
    "w-full px-4.5 py-3.5 border-0 rounded font-normal text-secondary outline-0 leading-22";
  const classNames = `${baseClassNames} ${props.className}`;
  return (
    <input
      type="input"
      value={props.value}
      id={props.id}
      className={classNames}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default FormInput;
