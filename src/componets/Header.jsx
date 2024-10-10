import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = (props) => {
  return (
    <header className="bg-white text-dark p-3 d-flex justify-content-between align-items-center">
      <img src={logo} alt="Logo" style={{ width: "auto", height: "50px  " }} />
      <div className="d-flex gap-3 align-items-center">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Top
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    How it works?
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    About us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
