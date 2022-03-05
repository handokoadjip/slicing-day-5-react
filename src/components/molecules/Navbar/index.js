import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <nav className="px-4 py-5">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-12">
              <Link
                className="fs-1 navbar-brand fw-bold text-uppercase text-center d-block m-0 ls-8px"
                to="#"
              >
                coastal & co
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid px-0">
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-uppercase d-flex mx-auto align-items-center">
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" aria-current="page" to="#">
                  newsletter
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" to="#">
                  view stories
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link" to="#">
                  about
                </Link>
              </li>
              <li className="nav-item px-0 px-lg-4">
                <Link className="nav-link line py-2 px-4" to="#">
                  suscribe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
