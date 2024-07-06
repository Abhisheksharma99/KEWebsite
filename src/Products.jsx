import React from "react";
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";
import "./index.css";
const Products = () => {
  return (
    <div className="container mb-4">
      <div className="row text-center mb-4 g-2 g-lg-3">
        <h1 className="productheading border-bottom text-center mb-5 fw-bolder">
          Popular Products
        </h1>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Defoamers & Antifoams</h5>
              <p className="card-text"></p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
              >
                <a href="/products#defoamers">
                  <span className="text-white">View Varients</span>
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold ">Silicone Emulsion</h5>
              <p className="card-text"></p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                <a href="/products#siliconeemulsions">
                  {" "}
                  <span className="text-white">View Varients</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Paper and Pulp Chemicals</h5>
              <p className="card-text"></p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop3"
              >
                <a href="/products#paperandpulp">
                  <span className="text-white">View Varients</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Car Care Products</h5>
              <p className="card-text"></p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop4"
              >
                <a href="/products#carcare">
                  <span className="text-white">View Varients</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-nowrap">
                Water Treatment
                <br /> Chemicals
              </h5>
              <p className="card-text"></p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop5"
              >
                <a href="/products#watertreatment">
                  <span className="text-white">View Varients</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="/products#defoamer" className="text-decoration-none">
        <button className="btn btn-lg productbtn d-flex justify-content-center text-center btn-outline fw-bold">
          View All Products
        </button>
      </a>
    </div>
  );
};

export default Products;
