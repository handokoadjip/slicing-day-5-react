import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper text-center">
            <div className="position-absolute top-50 start-50 translate-middle mt-5">
              <Link
                className="h1 btn btn-border px-5 fs-3 fw-medium text-uppercase ls-5px"
                to="#"
              >
                a minimalist theme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
