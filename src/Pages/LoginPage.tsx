import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import jwtDecode from "jwt-decode";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";
import { useEffect } from "react";
import axios from "../utils/axios";

const schemaValidation = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .min(8, "Password must be 8 characters or more")
    .required("Please enter your password"),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userResponse: userResponse = {
        name: decodedToken.unique_name,
        email: decodedToken.email,
        role: decodedToken.role,
      };
      dispatch(userUpdateState(userResponse));
      navigate("/all-employees");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  const submitHandler = async (values: { email: string; password: string }) => {
    const LOGIN_URL = "/Auth/login";
    console.log(values);

    if (isValid) {
      try {
        const response: AxiosResponse = await axios.post(LOGIN_URL, values);
        const token: string = response.data;
        localStorage.setItem("token", token);
        const decodedToken: DecodedToken = jwtDecode(token);

        dispatch(
          userUpdateState({
            email: decodedToken.email,
            role: decodedToken.role,
            name: decodedToken.unique_name,
          })
        );
        navigate("/all-employees");
        return response.data;
      } catch (error: unknown) {
        console.log(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="border border-blue-500 rounded-lg p-10 block lg:w-[500px]  max-w-[500px] mx-auto my-10 text-xl mt-32"
    >
      <div className="flex items-center justify-center text-2xl font-bold  mb- 10 text-blue-600">
        Login
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 mt-5 mb-5">
        <label htmlFor="email" className=" cursor-pointer ">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 rounded-lg outline-none border border-primary"
          type="text"
          // {...emailController.field}
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
          // {...passwordController.field}
          {...register("password")}
          className="px-2 py-1 rounded-lg outline-none border border-primary"
        />
        {errors?.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      {/* Button */}
      <button
        type="submit"
        className={`w-full p-5  font-semibold mt-5 rounded-lg mb-5  bg-primary`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2  rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Login"
        )}
      </button>
      <div className="w-full text-center ">
        <span>Don't have account? </span>
        <span className="underline hover:text-primary">
          <Link to="/sign-up">Sign Up</Link>
        </span>
      </div>
    </form>
  );
};

export default LoginPage;
