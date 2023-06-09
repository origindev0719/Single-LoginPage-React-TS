import React from "react";
import { useFormik } from "formik";

import Group from "../assets/group.png";
import Customer from "../assets/customcolor.png";
import FormInput from "../components/Form/FormInput";
import FormButton from "../components/Form/FormButton";
import FormLabel from "../components/Form/FormLabel";
import Image from "../components/Image";

interface FormValue {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const validate = (values: FormValue): Partial<FormValue> => {
    const errors: Partial<FormValue> = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="relative w-full overflow-hidden max-w-lg min-h-screen px-6 bg-base m-auto">
        <div className="group-img">
          <Image
            src={Group}
            alt="group-img"
            className="absolute w-280 h-269.56 right-m52 top-30"
          />
          <Image src={Customer} alt="customer" className="w-196 h-100 mt-275" />
        </div>
        <form className="mt-6" onSubmit={formik.handleSubmit}>
          <FormInput
            placeholder="Email"
            id="email"
            className="mb-primary"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div className=" text-pink-800 mb-primary">
              {formik.errors.email}
            </div>
          ) : null}
          <FormInput
            placeholder="Password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className=" text-pink-800 mt-primary">
              {formik.errors.password}
            </div>
          ) : null}
          <FormButton title="Login" />
          <div className="lg:mt-16 mt-8">
            <FormLabel color="text-primary" title="Forgot Password?" />
          </div>
        </form>
        <div className="absolute left-0 text-center w-full text bottom-8 pb-0 lg:pb-4">
          <FormLabel color="text-white" title="Don’t have an account?" />{" "}
          <FormLabel color="text-primary" title="Sign up" />
        </div>
      </div>
    </>
  );
};

export default Login;
