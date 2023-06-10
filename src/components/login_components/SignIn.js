import React, { useState } from "react";
import google from "../../assets/other-images/google_signin.svg";

function Login() {
  const [toggle, setToggle] = useState(false);
  const toggleGoogle = () => {
    setToggle(!toggle);
    console.log("Google sign in");
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col overflow-auto mt-6">
        <div>
          <h3 className="text-2xl font-semibold">
            Log in or sign up to continue
          </h3>
        </div>
        <div className="py-6">
          <button
            type="button"
            className="bg-[#FFFFFF] py-2 pb-3 px-16 text-[#1F1F1F] rounded-[12px] text-sm- font-bold  font-light flex flex-row rounded-lg border border-grey-500"
            onClick={toggleGoogle}
          >
            <img src={google} alt="google-logo" className="px-3" />
            Continue with Google
          </button>
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class=" w-64 h-px my-3 bg-gray-300 border-0 dark:bg-gray-700" />
          <span class="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>
        {/* <div class="relative flex py-5 items-center w-64">
          <div class="flex-grow border-t border-gray-200"></div>
          <span class="flex-shrink mx-4 text-gray-400">or</span>
          <div class="flex-grow border-t border-gray-200"></div>
        </div> */}
        <input
          type="text"
          className="w-[350px] form-input py-3 px-6 rounded-lg my-4 bg-[#EDEDED] border border-gray-300"
          placeholder="Enter your email address"
        ></input>
        <input
          type="text"
          className=" w-[350px] form-input py-3 px-6 rounded-lg bg-[#EDEDED] border border-gray-300"
          placeholder="Enter your password"
        ></input>
        <button
          type="button"
          className="w-[350px] bg-[#0052f6] py-2 pb-3 px-4 my-4 text-[#FFFFFF] items-center justify-center text-center rounded-[12px] text-sm- font-bold  font-light flex flex-row rounded-lg border border-grey-500"
          onClick={toggleGoogle}
        >
          Continue with Email
        </button>
        <h4 className="text-[#8F8F8F] my-6 text-center	">
          By continuing, you acknowledge that you have read <br /> and
          understood, and agree to Teeket’s{" "}
          <span className="underline decoration-solid font-bold">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline decoration-solid font-bold">
            Privacy Policy.
          </span>
        </h4>
      </div>
    </>
  );
}
export default Login;
