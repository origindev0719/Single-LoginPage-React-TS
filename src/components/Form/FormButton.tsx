import React from "react";

type FormButtonProps = {
  title: string;
};

const FormButton: React.FC<FormButtonProps> = ({ title }) => {
  const baseClassNames =
    "w-full py-3.5 border-0 outline-0 leading-22 mt-8 rounded bg-buttonColor text-white text-16 font-semibold";

  return (
    <button type="submit" className={baseClassNames}>
      {title}
    </button>
  );
};

export default FormButton;
