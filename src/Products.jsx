import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal routing
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";
import "./index.css";

const Products = () => {
  return (
    <div className="container mb-4">
      <h1 className="productheading border-bottom text-center mb-5 fw-bolder">
        Popular Products
      </h1>

      {/* Responsive row for cards */}
      <div className="row g-4 justify-content-center">
        {[
          { title: "Defoamers & Antifoams", link: "#defoamers" },
          { title: "Silicone Emulsion", link: "#siliconeemulsions" },
          { title: "Paper and Pulp Chemicals", link: "#paperandpulp" },
          { title: "Car Care Products", link: "#carcare" }
        ].map((product, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <div className="card cardshadow cardborder h-100">
              <img src={productimg} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center">{product.title}</h5>
                <div className="mt-auto">
                  <Link to={`/products${product.link}`} className="text-decoration-none">
                    <button className="btn-outline modalbtn btn fw-bold w-100">
                      View Variants
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Link to="/products#defoamer" className="text-decoration-none">
          <button className="btn btn-lg productbtn btn-outline fw-bold">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
