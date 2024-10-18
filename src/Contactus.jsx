import React, { useState } from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import "./index.css";
import mailSent from "./images/sent mail.gif";

const Contactus = () => {
  const [mailSentSuccess, setMailSentSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await send(
        "service_elocnmw",
        "template_5pecw7h",
        data,
        "64heNEmRcH7Pq4ZsL"
      );
      setMailSentSuccess(true);
      setTimeout(() => setMailSentSuccess(false), 2000);
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };
  const GoogleMap = () => (
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797822.3090129504!2d77.295588!3d28.34761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x355bca5e6d36e2c2!2sKashyap%20Enterprises%20%7C%20Defoamer%20Manufacturer!5e0!3m2!1sen!2sus!4v1632737799165!5m2!1sen!2sus"
      width="100%"
      height="400"
      loading="lazy"
      className="border rounded"
    />
  );

  return mailSentSuccess ? (
    <img src={mailSent} className="mailSent" alt="Mail sent successfully" />
  ) : (
    <div className="ms-5 mb-5 me-5 mt-5 pt-5">
      <h1 className="fw-bolder text-center contacthead border-bottom pt-5">
        Contact Us
      </h1>

      <form
        className="mt-5 formbg contactshadow mb-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row g-3 container mt-3">
          <div className="col-md-6 formdivider">
            <div className="row">
              <div className="col">
                <label
                  htmlFor="from_name"
                  className="form-label fs-4 fw-bold mb-3 contacthead"
                >
                  Fullname*
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.from_name ? "is-invalid" : ""
                    }`}
                  placeholder="Fullname"
                  {...register("from_name", { required: "Fullname is required" })}
                />
                {errors.from_name && (
                  <div className="invalid-feedback">{errors.from_name.message}</div>
                )}
              </div>

              <div className="col">
                <label
                  htmlFor="from_email"
                  className="form-label fs-4 fw-bold mb-3 contacthead"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.from_email ? "is-invalid" : ""
                    }`}
                  placeholder="Email"
                  {...register("from_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.from_email && (
                  <div className="invalid-feedback">{errors.from_email.message}</div>
                )}
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
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject.message}</div>
              )}
            </div>

            <div className="col-md-12">
              <label
                htmlFor="message"
                className="form-label fs-4 fw-bold mb-3 contacthead"
              >
                Message*
              </label>
              <textarea
                className={`form-control mb-5 ${errors.message ? "is-invalid" : ""
                  }`}
                placeholder="Message"
                style={{ height: "200px" }}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback">{errors.message.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-md modalbtn text-white ms-3 mb-5 fw-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          <div className="col-md-6 map">
            <GoogleMap />
          </div>
        </div>

        <div className="row mt-3">
          {[
            {
              icon: "fa-map-marker-alt",
              title: "Address",
              content: "566, Sector-55, Faridabad, Haryana, India",
            },
            {
              icon: "fa-phone",
              title: "Phone",
              content: (
                <>
                  <a className="fw-bold fs-6 text-dark text-decoration-none" href="tel:+917019797893">+91 7019 797 893</a>
                  <br />
                  <a className="fw-bold fs-6 text-dark text-decoration-none" href="tel:+919811407452">+91 9811 407 452</a>
                </>
              ),
            },
            {
              icon: "fa-paper-plane",
              title: "Email",
              content: (
                <>
                  <a className="fw-bold fs-6 text-dark text-decoration-none" href="mailto:sales@kashyapenterprises.com">
                    sales@kashyapenterprises.com
                  </a>
                  <br />
                  <a className="fw-bold fs-6 text-dark text-decoration-none" href="mailto:info@kashyapenterprises.com">
                    info@kashyapenterprises.com
                  </a>
                </>
              ),
            },
            {
              icon: "fa-globe",
              title: "Website",
              content: (
                <a className="fw-bold fs-6 text-dark text-decoration-none" href="http://www.kashyapenterprises.com">
                  www.kashyapenterprises.com
                </a>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="col-md-3 text-center">
              <div className="dbox w-100">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className={`fa fa-3x fas ${item.icon}`}></span>
                </div>
                <div className="text">
                  <p>
                    <span className="fs-3 fw-bold contacthead">{item.title}</span>
                    <br />
                    <span className="fw-bold fs-6 text-dark text-decoration-none">
                    {item.content}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Contactus;
