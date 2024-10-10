import React, { useState } from "react";
import Header from "./Header";
import banner_login from "../images/banner_login.png";
import Logo from "../images/logo.png";
import { Container } from "react-bootstrap";

function Body() {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-6 p-2">
            <div className="text-center">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "auto", height: "100px  " }}
              />
              <p className="mb-1">Welcome back</p>
              <p className="m-0">Please Login/Signup to your account</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start mt-3 w-100">
                <div>
                  <span className="text-danger">*</span>
                  <span>Email</span>
                </div>
                <input
                  type="email"
                  className="border-[1px] border-[#ccc] border-solid w-100 rounded-sm py-1"
                />
              </div>

              <div className="flex flex-col items-start mt-3 w-100">
                <div>
                  <span className="text-danger">*</span>
                  <span>Password</span>
                </div>
                <input
                  type="password"
                  className="border-[1px] border-[#ccc] border-solid w-100 rounded-sm py-1"
                />
              </div>

              <div className="py-4 d-flex justify-content-between align-items-center">
                <input type="checkbox" />
                <span className="ml-2">Remember me</span>
                <span className="text-[#fac81e] font-semibold ml-auto">
                  Forgot Password ?
                </span>
              </div>
              <div>
                <button className="btn btn-warning w-100">Login</button>
              </div>
              <span>
                <a href="#" className="text-warning">
                  Register now
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="ml-5">
              <img
                src={banner_login}
                alt="Banner_login"
                style={{ width: "auto", height: "400px  " }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Body;
