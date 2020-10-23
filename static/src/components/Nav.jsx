import React        from "react";
import lensLogo     from "../images/logo.svg";
import * as Utils     from '../utils/utils'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      <a className="navbar-brand" href="index.html">
        <img src={lensLogo} alt="alternative" />
        <span> Glasswall Desktop Application</span>
      </a>

      <button
        className       ="navbar-toggler"
        type            ="button"
        data-toggle     ="collapse"
        data-target     ="#navbarsExampleDefault"
        aria-controls   ="navbarsExampleDefault"
        aria-expanded   ="false"
        aria-label      ="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#header">
              HOME <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#features">
              FEATURES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#demo">
              DEMO
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={Utils.RELEASE_URL}
            >
              RELEASES 
            </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
          <span className="fa-stack">
            <a  target="_blank" href="https://github.com/k8-proxy/glasswall-desktop">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-github fa-stack-1x"></i>
            </a>
          </span>
        </span>
      </div>
    </nav>
  );
}
