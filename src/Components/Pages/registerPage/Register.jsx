import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../SHares/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-3/12 mx-auto">
        <form className=" p-6 border-2 rounded-lg form-control">
          <label htmlFor="login" className="text-2xl font-medium">
            Login
          </label>
          <input
            type="text"
            name="Fname"
            placeholder="First name"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <input
            type="text"
            name="lName"
            placeholder="Last name"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <input
            type="password"
            name="confirmF"
            placeholder="Confirm password"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <div className="flex items-center justify-between">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-success" />
              <small className="ms-1">Remember me</small>
            </label>
            <p className="btn btn-link text-rose-400 hover:text-red-600">
              <Link>forgot password?</Link>
            </p>
          </div>
          <button className="btn btn-block my-3 text-white bg-rose-400 hover:bg-rose-700">
            Login
          </button>

          <p className="text-center">
            Don't have an account?
            <Link
              to="/login"
              className="btn btn-link text-rose-400 hover:text-red-700"
            >
              Login
            </Link>
          </p>
        </form>

        <div className="centered-text my-5">
          <span className="text-xl font-medium">OR</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
