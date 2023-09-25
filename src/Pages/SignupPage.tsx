import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "../utils/axios";
import { AxiosResponse } from "axios";
import  axios  from "../utils/axios";

const schemaValidation = yup.object({
  name: yup
    .string()
    .required("Please enter your username")
    .max(10, "User name must be less than 10 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  mobile: yup.string().required("Please enter your mobile number"),
  department: yup.string().required("Please choose your department"),
  role: yup.string().required("Please choose your role"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .min(8, "Password must be 8 characters or more")
    .required("Please enter your password"),
  //   term: yup
  //     .boolean()
  //     .required("Please accept terms and conditions")
  //     .oneOf([true], "The terms and conditions must be accepted."),
});

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  const onSubmitHandler = async (values: {
    name: string;
    email: string;
    mobile: string;
    password: string;
    department: string;
    role: string;
  }) => {
    const REGISTER_URL = "/Auth/register";
    try {
      console.log(values);
      const response: AxiosResponse = await axios.post(
        REGISTER_URL,
        values
      );
      navigate("/");
      return response?.data;
    } catch (error: unknown) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="border border-primary rounded-lg p-10 block lg:w-[500px]  max-w-[500px] mx-auto my-5 text-xl mt-10"
    >
      <div className="flex items-center justify-center text-2xl font-bold  mb-5">
        Sign Up Now
      </div>
      {/* UserName */}
      <div className="flex flex-col gap-3 mt-10 mb-5">
        <label htmlFor="username" className=" cursor-pointer">
          Username
        </label>
        <input
          id="username"
          placeholder="Enter your username"
          type="text"
          className="px-2 py-1 rounded-lg outline-none border border-primary"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className=" cursor-pointer ">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 rounded-lg outline-none border border-primary"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="mobile" className=" cursor-pointer ">
          Mobile
        </label>
        <input
          id="mobile"
          placeholder="Enter your mobile number"
          className="px-2 py-1 rounded-lg outline-none border border-primary"
          type="text"
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-sm text-red-500">{errors.mobile.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className=" cursor-pointer ">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="px-2 py-1 rounded-lg outline-none border border-primary"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Department */}
      <div className="flex flex-col gap-3 mb-5">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="department"
        >
          Department
        </label>
        <select
          id="department"
          {...register("department")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="Development">Development</option>
          <option value="Quality Assurance">Quality Assurance</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Security">Security</option>
          <option value="Project Management">Project Management</option>
          <option value="Sales and Marketing">Sales and Marketing</option>
        </select>
        {errors.department && (
          <p className="text-sm text-red-500">{errors.department.message}</p>
        )}
      </div>

      {/* Role */}
      <div className="flex flex-col gap-3 mb-5">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="role"
        >
          Role
        </label>
        <select
          id="role"
          {...register("role")}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="Administrator">Administrator</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Developer">Developer</option>
          <option value="Technical Help">Technical Help</option>
        </select>
        {errors.role && (
          <p className="text-sm text-red-500">{errors.role.message}</p>
        )}
      </div>

      {/* Terms and conditions */}
      <div className="w-full">
        <input
          type="checkbox"
          className="  "
          //   {...register("term")}
          defaultChecked={true}
        ></input>{" "}
        <span className="ml-3  ">I accept the terms and conditions</span>
      </div>

      {/* Button */}
      <button
        type="submit"
        className={`w-full p-5   font-semibold mt-5 rounded-lg mb-5  bg-primary`}
        // disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
      <div className="w-full text-center  ">
        <span>Already have account? </span>
        <span className="underline hover:text-primary">
          <Link to="/">Sign In</Link>
        </span>
      </div>
    </form>
  );
};

export default SignupPage;
