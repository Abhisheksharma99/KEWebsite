import React from "react";
import history from "./images/parchment.png"
import globe from "./images/history.png"
import medal from "./images/medal.png"
import dart from "./images/dart.png"
import iso from "./images/iso.png"
import iso2 from "./images/iso2.png"
import isologo from "./images/ISO LOGO.png"
import makeindia from "./images/makeindia.png"
import msme from "./images/msme.png"
import IsoCertificate from "./images/Isocertificate.jpg"
import udhyamcertificate from "./images/udhyamcertificate.jpg"
const Aboutus = () => {
  return (

    <div>
      <div>
        <div><h1>&nbsp;&nbsp;</h1></div>
      </div>
      <div className="row align-items-center text-center mb-5 mt-5 pt-5">
        <div className="col">
          <img height={100} src={iso} alt="" />
        </div>
        <div className="col">
          <img height={100} src={iso2} alt="" />
        </div>
        <div className="col">
          <img height={100} src={isologo} alt="" />
        </div>
        <div className="col">
          <img height={100} src={makeindia} alt="" />
        </div>
        <div className="col">
          <img height={100} src={msme} alt="" />
        </div>
      </div>
      <div className="container text-center">

        <h1 className="fw-bold text-center mb-5 abthead"><span className="abttitle"><img height="50px" src={history} alt="history" /> &nbsp;Our History &nbsp;<img height="50px" src={history} alt="history" /></span></h1>
        <p className="mb-5 text-muted fw-bolder">
          Kashyap Enterprises (KE) is a chemical manufacturing company founded
          by Ranjeet Banerjee in 2003 in Faridabad, India. Kashyap Enterprises
          was built on a foundation of integrity and ethical business practices
          designed to foster steady growth supported by a dedicated long-term
          workforce.
        </p>
      </div>
      <section className="row text-center ms-5 me-5 g-5 mb-5">
        <div className="col-lg-6">
          <h1 className="fw-bold border-bottom mb-5 abthead"><span className="abttitle text-nowrap"> <img height={50} src={globe} alt="globe" /> &nbsp; Our Mission &nbsp; <img height={50} src={globe} alt="globe" /> </span></h1>
          <p className='text-muted fw-bold'>
            Our mission is to continually strengthen our business relationships
            through sound business practices and strategies enhanced by
            transparent communication. We are in the trenches every day forging
            bonds and assessing the integrity of potential suppliers to best
            serve our customers. After almost two decades of hard work, our most
            valuable asset as a company is the ethos that inspires our
            customers, suppliers, and employees to depend on us and spend their
            entire careers working with Kashyap Enterprises.
          </p>
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bold border-bottom mb-5 abthead"><span className="abttitle text-nowrap"><img height="50px" src={medal} alt="history" />Our Core Values<img height="50px" src={medal} alt="history" /> </span></h1>
          <p className='text-muted fw-bold'>
            Integrity - We uphold the highest standards of integrity in all of
            our actions. <br /> Innovation - We are resolute in pursing
            innovation that creates value for our customers and shareholders.{" "}
            <br /> Ownership - We are personally accountable for delivering on
            our commitments. <br /> Commitment - We develop relationships that
            make a positive difference in our customers' lives. <br /> Quality
            Assurance - We provide outstanding products and unsurpassed service
            that, together, deliver premium value to our customers.
          </p>
        </div>
      </section>
      <div className="container text-center">
        <h1 className="fw-bold border-bottom mb-5 abthead"><span className="abttitle"><img height="50px" src={dart} alt="history" /> Our Vision <img height="50px" src={dart} alt="history" /></span></h1>
        <p className='text-muted fw-bold'>
          To be the market leader in the “Speciality Chemicals domain” with a
          Global perspective by exceeding Customer expectations in Quality and
          Service, attain operational excellence in Manufacturing, Total Quality
          Management, Safety & Supply Chain facilitated through our fully
          compliant state-of-the-art manufacturing plant.
        </p>
      </div>
      <div className="row align-items-center text-center mt-5">
        <div className="col">
          <img height={400} src={IsoCertificate} alt="Iso Certificate" />
        </div>
        <div className="col">
          <img height={435} src={udhyamcertificate} alt="Udhyam Certificate" />
        </div>
      </div>
      <div><h1>&nbsp;&nbsp;</h1></div>
    </div>

  );
};

export default Aboutus;
