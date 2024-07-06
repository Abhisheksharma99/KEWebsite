import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div className="mb-5">
      <div className="blog-home3 py-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="my-3 blogheading fw-bold fs-2 productheading text-nowrap">
                Latest News and Blog from KashyapEnterprises
              </h3>
              <h6 className="subtitle font-weight-normal">
                You can relay on our amazing Products list and also our customer
                services will be great experience for you without doubt
              </h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="card border-0 mb-4">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img4.jpg"
                    alt="wrappixel kit"
                  />
                </a>
                <div className="date-pos text-center text-white p-2 bg-success-gradiant fs-6 fw-bold">
                  JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                </div>
                <h5 className="font-weight-medium mt-3">
                  <a
                    href="#"
                    className="link text-decoration-none fw-bold fs-4"
                  >
                    Technologies started to change Drastically
                  </a>
                </h5>
                <p className="m-t-20 fs-6 fw-bold">
                  You can relay on our amazing Products list and also our
                  customer services will be great experience. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="card border-0 mb-4">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img5.jpg"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="date-pos text-center text-white p-2 bg-success-gradiant fs-6 fw-bold">
                      JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                    </div>
                    <h6 className="font-weight-medium mt-3">
                      <a href="#" className="link text-decoration-none">
                        New Seminar on Newest Food Recipe
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 mb-4">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img6.jpg"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="date-pos text-center text-white p-2 bg-success-gradiant fs-6 fw-bold">
                      JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                    </div>
                    <h6 className="font-weight-medium mt-3">
                      <a href="#" className="link text-decoration-none">
                        New Seminar on Newest Food Recipe
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 mb-4">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img7.jpg"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="date-pos text-center text-white p-2 bg-success-gradiant fs-6 fw-bold">
                      JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                    </div>
                    <h6 className="font-weight-medium mt-3">
                      <a href="#" className="link text-decoration-none">
                        New Seminar on Newest Food Recipe
                      </a>
                    </h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 mb-4">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/blog/blog-home/img8.jpg"
                        alt="wrappixel kit"
                      />
                    </a>
                    <div className="date-pos text-center text-white p-2 bg-success-gradiant fs-6 fw-bold">
                      JOHN DOE &nbsp; &nbsp; SEPT 15, 2017
                    </div>
                    <h6 className="font-weight-medium mt-3">
                      <a href="#" className="link text-decoration-none">
                        New Seminar on Newest Food Recipe
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/blogs" className="text-decoration-none">
        <button className="btn btn-lg productbtn d-flex justify-content-center text-center btn-outline fw-bold">
          View More Blogs
        </button>
      </Link>
    </div>
  );
};

export default Blogs;
