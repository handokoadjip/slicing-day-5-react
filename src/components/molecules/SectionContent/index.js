import { Image1, Image2, Image3, Image4 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper text-center">
              <h2 className="fs-3 fw-bold text-uppercase mb-3 ls-5px">
                crafted for creative
              </h2>
              <p className="mb-5 fw-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                error ex illo et!
              </p>
            </div>
          </div>
        </div>

        <div className="row py-2" data-masonry='{"percentPosition": true }'>
          <div className="col-6 col-lg-4 py-3">
            <div className="card border-0" style={{ height: "500px" }}>
              <figure class="m-0">
                <img
                  src={Image1}
                  alt="image-1"
                  style={{ height: "500px", width: "100%", objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div className="card border-0" style={{ height: "250px" }}>
              <figure class="m-0">
                <img
                  src={Image2}
                  alt="image-2"
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div className="card border-0" style={{ height: "500px" }}>
              <figure class="m-0">
                <img
                  src={Image3}
                  alt="image-3"
                  style={{ height: "500px", width: "100%", objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
          <div className="col-6 col-lg-4 py-3">
            <div className="card border-0" style={{ height: "400px" }}>
              <figure class="m-0">
                <img
                  src={Image4}
                  alt="image-4"
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
