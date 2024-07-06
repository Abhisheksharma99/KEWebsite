import { useState, useEffect } from "react";
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";
import Type from "./Type";
const ProductPage = () => {
  const [btninfo, setbtninfo] = useState();
  const defoamers = [
    "CATALYST AF ECO - Economy Silicone Defoamer/Antifoam",
    "CATALYST SAF 715 - 15% Silicone Defoamer/Antifoam",
    "CATALYST SAF 720 - 20% Silicone Defoamer/Antifoam",
    "CATALYST SAF 730 - 30% Silicone Defoamer/Antifoam",
    "CATALYST SAF 740 - 40% Silicone Defoamer/Antifoam",
    "CATALYST SAF 750 - 50% Silicone Defoamer/Antifoam",
    "CATALYST SAF 760 - 60% Silicone Defoamer/Antifoam",
    "CATALYST SAF PP 730 Defoamer/ Antifoam for Paper & Pulp",
    "CATALYST SAF SI 730 Defoamer/ Antifoam for Starch Industry",
    "CATALYST SAF TP 720 Defoamer/ Antifoam for ETP/STP Plants",
    "CATALYST SAF TP 730 Defoamer/ Antifoam for ETP/STP Plants",
    "CATALYST Defoamer/ Antifoam Concentrate (100%)",
  ];
  const siliconeEmulsions = [
    "CATALYST SE 15 Silicone Emulsion",
    "CATALYST SE 20 Silicone Emulsion",
    "CATALYST SE 30 Silicone Emulsion",
    "CATALYST SE 35 Silicone Emulsion",
    "CATALYST SE 50 Silicone Emulsion",
    "CATALYST SE 60 Silicone Emulsion",
  ];
  const paperChemicals = [
    "PP Defoamer/ Antifoam",
    "Fortified Rosin",
    "Dry Strength Resin (DSR)",
    "Urea Formaldehyde Resin",
    "Dispersing Agent",
  ];
  const carCare = [
    "All in One Polish",
    "Silicone Polish",
    "Tyre & Dashboard Shiner",
    "Carnauba Wax Polish",
    "Wax Polish",
    "Car Dry Cleaning Chemical",
    "Car Seat and Roof Cleaner",
    "Car Wash Shampoo ",
    "Car Wash High Foam Shampoo",
    "Waterless Car Wash/ Dry Wash"
  ];
  console.log(btninfo);
  var currid = "abc";
  const handleClick = (e) => {
    var currid = e.target.id;
    console.log(currid);
    setbtninfo(currid);
    console.log(btninfo, "btninfo");
  };
  useEffect(() => {
    setbtninfo(currid);
  }, []);

  return (
    <>
      <div className="mt-5">
        <Type
          text={[
            "Chemistry Is Fun",
            "Chemists have all the Solutions",
            "Science is always the solution",
            "With Chemistry, We Can",
          ]}
        />
        <h1
          id="defoamers"
          className="productheading border-bottom text-center mb-5 fw-bolder"
        >
          Defoamers
        </h1>
        <div className="container mt-50 mb-50">
          <div className="row">
            {defoamers.map((product) => (
              <>
                <div className="col-md-3 mt-2" key={product}>
                  <div className="cardproducts">
                    <div className="card-body">
                      <div className="card-img-actions">
                        {" "}
                        <img
                          src={productimg}
                          className="card-img img-fluid"
                          width="96"
                          height="350"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                    <div className="card-body bg-light text-center">
                      <div className="mb-2">
                        <h6 className="font-weight-semibold mb-2">
                          {" "}
                          <a
                            href="#"
                            className="productsubhead mb-2"
                            data-abc="true"
                          >
                            {product}
                          </a>{" "}
                        </h6>{" "}
                        <a href="" className="text-muted" data-abc="true">
                          Defoamers & Antifoams
                        </a>
                      </div>
                      <h3 className="mb-0 font-weight-semibold"></h3>
                      <a href={"product/#Defoamer"}>
                        <button
                          type="button"
                          className="btn productbtn"
                          id="btn1"
                          onClick={handleClick}
                        >
                          <i className="fas fa-eye mr-2"></i>&nbsp;View
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <h1
          id="siliconeemulsions"
          className="productheading border-bottom text-center mb-5 fw-bolder"
        >
          Silicone Emulsions
        </h1>
        <div className="container d-flex justify-content-center mt-50 mb-50 mx-auto">
          <div className="row mx-auto">
            {siliconeEmulsions.map((item) => (
              <div className="col-md-3 mt-2" key={item}>
                <div className="cardproducts mx-auto">
                  <div className="card-body mx-auto">
                    <div className="card-img-actions mx-auto">
                      {" "}
                      <img
                        src={productimg}
                        className="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className="card-body bg-light text-center mx-auto">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        {" "}
                        <a
                          href="#"
                          className="productsubhead mb-2"
                          data-abc="true"
                        >
                          {item}
                        </a>{" "}
                      </h6>{" "}
                      <a href="#" className="text-muted" data-abc="true">
                        Silicone Emulsion
                      </a>
                    </div>
                    <h3 className="mb-0 font-weight-semibold"></h3>
                    <a href="/product#single">
                      <button
                        type="button"
                        className="btn productbtn"
                        id="btn1"
                        onClick={handleClick}
                      >
                        <i className="fas fa-eye mr-2"></i>&nbsp;View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          id="paperandpulp"
          className="productheading border-bottom text-center mb-5 fw-bolder"
        >
          Paper and Pulp Chemicals
        </h1>
        <div className="container d-flex justify-content-center mt-50 mb-50">
          <div className="row">
            {paperChemicals.map((item) => (
              <div className="col-md-3 mt-2" key={item}>
                <div className="cardproducts">
                  <div className="card-body">
                    <div className="card-img-actions">
                      {" "}
                      <img
                        src={productimg}
                        className="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        {" "}
                        <a
                          href="#"
                          className="productsubhead mb-2"
                          data-abc="true"
                        >
                          {item} <br /> <br />
                        </a>{" "}
                      </h6>{" "}
                      <a href="#" className="text-muted" data-abc="true">
                        {" "}
                        Paper and Pulp Chemicals{" "}
                      </a>
                    </div>
                    <h3 className="mb-0 font-weight-semibold"></h3>
                    <a href="/product#single">
                      <button
                        type="button"
                        className="btn productbtn"
                        id="btn1"
                        onClick={handleClick}
                      >
                        <i className="fas fa-eye mr-2"></i>&nbsp;View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          id="carcare"
          className="productheading border-bottom text-center mb-5 fw-bolder"
        >
          Car Care Products
        </h1>
        <div className="container d-flex justify-content-center mt-50 mb-50">
          <div className="row">
            {carCare.map((item) => (
              <div className="col-md-3 mt-2" key={item}>
                <div className="cardproducts">
                  <div className="card-body">
                    <div className="card-img-actions">
                      {" "}
                      <img
                        src={productimg}
                        className="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        {" "}
                        <a
                          href="#"
                          className="productsubhead mb-2"
                          data-abc="true"
                        >
                          {item} <br /> <br />
                        </a>{" "}
                      </h6>{" "}
                      <a href="#" className="text-muted" data-abc="true">
                        {" "}
                        Paper and Pulp Chemicals{" "}
                      </a>
                    </div>
                    <h3 className="mb-0 font-weight-semibold"></h3>
                    <a href="/product#single">
                      <button
                        type="button"
                        className="btn productbtn"
                        id="btn1"
                        onClick={handleClick}
                      >
                        <i className="fas fa-eye mr-2"></i>&nbsp;View
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1
          id="watertreatment"
          className="productheading border-bottom text-center mb-5 fw-bolder"
        >
          Water Treatment Chemicals
        </h1>
        <div className="container d-flex justify-content-center mt-50 mb-50">
          <div className="row">
            <div className="col-md-3 mt-2">
              <div className="cardproducts">
                <div className="card-body">
                  <div className="card-img-actions">
                    {" "}
                    <img
                      src={productimg}
                      className="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      {" "}
                      <a
                        href="#"
                        className="productsubhead mb-2"
                        data-abc="true"
                      >
                        Flocculating Agent/ Poly Electrolyte <br /> <br />
                      </a>{" "}
                    </h6>{" "}
                    <a href="#" className="text-muted" data-abc="true">
                      Water Treatment Chemicals
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold"></h3>
                  <a href="/product#single">
                    <button
                      type="button"
                      className="btn productbtn"
                      id="btn1"
                      onClick={handleClick}
                    >
                      <i className="fas fa-eye mr-2"></i>&nbsp;View
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="cardproducts">
                <div className="card-body">
                  <div className="card-img-actions">
                    {" "}
                    <img
                      src={productimg}
                      className="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      {" "}
                      <a
                        href="#"
                        className="productsubhead mb-2"
                        data-abc="true"
                      >
                        Bio Culture Chemical <br /> <br /> <br />
                      </a>{" "}
                    </h6>{" "}
                    <a href="#" className="text-muted" data-abc="true">
                      Water Treatment Chemicals
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold"></h3>
                  <a href="/product#single">
                    <button
                      type="button"
                      className="btn productbtn"
                      id="btn1"
                      onClick={handleClick}
                    >
                      <i className="fas fa-eye mr-2"></i>&nbsp;View
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="cardproducts">
                <div className="card-body">
                  <div className="card-img-actions">
                    {" "}
                    <img
                      src={productimg}
                      className="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      {" "}
                      <a
                        href="#"
                        className="productsubhead mb-2"
                        data-abc="true"
                      >
                        CATALYST SAF TP 720 Defoamer/ Antifoam for ETP/STP
                        Plants
                      </a>{" "}
                    </h6>{" "}
                    <a href="#" className="text-muted" data-abc="true">
                      Water Treatment Chemicals
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold"></h3>
                  <a href="/product#single">
                    <button
                      type="button"
                      className="btn productbtn"
                      id="btn1"
                      onClick={handleClick}
                    >
                      <i className="fas fa-eye mr-2"></i>&nbsp;View
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div className="cardproducts">
                <div className="card-body">
                  <div className="card-img-actions">
                    {" "}
                    <img
                      src={productimg}
                      className="card-img img-fluid"
                      width="96"
                      height="350"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      {" "}
                      <a
                        href="#"
                        className="productsubhead mb-2"
                        data-abc="true"
                      >
                        CATALYST SAF TP 730 Defoamer/ Antifoam for ETP/STP
                        Plants
                      </a>{" "}
                    </h6>{" "}
                    <a href="#" className="text-muted" data-abc="true">
                      Water Treatment Chemicals
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold"></h3>
                  <a href="/product#single">
                    <button
                      type="button"
                      className="btn productbtn"
                      id="btn1"
                      onClick={handleClick}
                    >
                      <i className="fas fa-eye mr-2"></i>&nbsp;View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
