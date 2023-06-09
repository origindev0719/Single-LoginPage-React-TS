import React from "react";

type FormLabelProps = {
  color?: string;
  title?: string;
};

const FormLabel: React.FC<FormLabelProps> = (prop) => (
  <span className={prop.color}>{prop.title}</span>
);

export default FormLabel;
