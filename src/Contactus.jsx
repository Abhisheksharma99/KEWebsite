import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import "./index.css";
import mailSent from "./images/sent mail.gif";
const Contactus = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [mailSentSuccess, setMailSentSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_elocnmw", "template_5pecw7h", toSend, "64heNEmRcH7Pq4ZsL")
      .then((response) => {
        setMailSentSuccess(true);
        setTimeout(() => {
          setMailSentSuccess(false);
        }, 1000);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
  };
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const validateForm = (e) => {
    if (
      toSend.from_email.length === 0 ||
      !toSend.from_email.includes("@") ||
      toSend.from_name.length === 0 ||
      toSend.subject.length === 0 ||
      toSend.message.lenth === 0
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    validateForm(e);
  };
  return mailSentSuccess ? (
    <img src={mailSent} className="mailSent" alt=""></img>
  ) : (
    <div className="ms-5 mb-5 me-5 mt-5 pt-5">
      <h1 className="fw-bolder text-center contacthead border-bottom pt-5">
        Contact Us
      </h1>
      <form
        className="mt-5 formbg contactshadow mb-3 needs-validation"
        onSubmit={handleSubmit}
      >
        <div className="row g-3 container mt-3">
          <div className="col-md-6 formdivider">
            <div className="row ">
              <div className="col">
                <label
                  htmlFor="Fullname"
                  className="form-label  fs-4 fw-bold mb-3 contacthead"
                >
                  Fullname*
                </label>
                <input
                  type="text"
                  className={"form-control"}
                  placeholder="Fullname"
                  aria-label="Fullname"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label
                  htmlFor="Email"
                  className="form-label  fs-4 fw-bold mb-3 contacthead"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  name="from_email"
                  value={toSend.from_email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <label
                htmlFor="subject"
                className="form-label fs-4 fw-bold mb-3 contacthead"
              >
                Subject*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                id="subject"
                name="subject"
                value={toSend.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12">
              <label
                htmlFor="Textarea"
                className="form-label  fs-4 fw-bold mb-3 contacthead"
              >
                Message*
              </label>
              <textarea
                className="form-control mb-5"
                placeholder="Message"
                id="floatingTextarea"
                name="message"
                style={{ height: "200px" }}
                value={toSend.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={
                "btn btn-md modalbtn text-white ms-3 mb-5 fw-bold"
              }
              disabled={disableSubmit}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="col-md-6 map">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797822.3090129504!2d77.295588!3d28.34761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x355bca5e6d36e2c2!2sKashyap%20Enterprises%20%7C%20Defoamer%20Manufacturer%20%7C%20Silicone%20Defoamer%20Manufacturer%20%7C%20Antifoaming%20Agent%20Manufacturer%20%7C%20Silicone%20Emulsion%20Manufacturer!5e0!3m2!1sen!2sus!4v1632737799165!5m2!1sen!2sus"
              width="250"
              height="420"
              allowFullScreen="yes"
              loading="lazy"
              className="col-md-12 mt-3 d-flex align-items-stretch"
            ></iframe>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-3x  	fas fa-map-marker-alt addressicon"></span>
              </div>
              <div className="text">
                <p className="fw-bold fs-6 text-dark text-decoration-none">
                  <span className="fs-3 fw-bold contacthead">
                    Address: <br />
                  </span>{" "}
                  566, Sector-55, 121004, Faridabad, Haryana, India
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-3x fa-phone telicon"></span>
              </div>
              <div className="text">
                <p>
                  <span className="fs-3 fw-bold contacthead">
                    Phone: <br />
                  </span>{" "}
                  <a
                    className="fw-bold fs-6 text-dark text-decoration-none"
                    href="tel:+91 7019 797 893"
                  >
                    +91 7019 797 893
                  </a>
                </p>
                <p>
                  <span></span>{" "}
                  <a
                    className="fw-bold fs-6 text-dark text-decoration-none"
                    href="tel:+91 9811 407 452"
                  >
                    +91 9811 407 452
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-3x fa-paper-plane emailicon"></span>
              </div>
              <div className="text">
                <p>
                  <span className="fs-3 fw-bold contacthead">Email:</span>{" "}
                  <br />{" "}
                  <a
                    className="fw-bold fs-6 text-dark text-decoration-none"
                    href="mailto:sales@kashyapenterprises.com"
                  >
                    sales@kashyapenterprises.com
                  </a>
                </p>
                <p>
                  <span></span>{" "}
                  <a
                    className="fw-bold fs-6 text-dark text-decoration-none"
                    href="mailto:info@kashyapenterprises.com"
                  >
                    info@kashyapenterprises.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dbox w-100 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-3x fa-globe websiteicon"></span>
              </div>
              <div className="text">
                <p>
                  <span className="fs-3 fw-bold contacthead">Website</span>{" "}
                  <a
                    className="fw-bold fs-6 text-dark text-decoration-none"
                    href="www.kashyapenterprises.com"
                  >
                    www.kashyapenterprises.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
