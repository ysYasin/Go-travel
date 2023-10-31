import React from "react";
import Navbar from "../../SHares/Navbar";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
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
            name="email"
            placeholder="Username or Email"
            style={{ borderBottom: "1px solid #000", outline: "none" }}
            className="p-2 my-3 w-full block"
          />
          <input
            type="password"
            name="password"
            placeholder="Username or Email"
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
              to="/register"
              className="btn btn-link text-rose-400 hover:text-red-700"
            >
              Register
            </Link>
          </p>
        </form>

        <div className="centered-text my-5">
          <span className="text-xl font-medium">OR</span>
        </div>
        <div>
          <button className="btn btn-block flex items-center justify-center mb-2">
            <FaGoogle /> width google
          </button>
          <button className="btn btn-block flex items-center justify-center mb-2">
            <FaFacebook /> width Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
