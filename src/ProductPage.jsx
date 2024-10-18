import { Link } from "react-router-dom"; // Use React Router Link
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";
import Type from "./Type";

const ProductCard = ({ product, category, onClick }) => (
  <div className="col-md-3 mt-2">
    <div className="cardproducts">
      <div className="card-body">
        <div className="card-img-actions">
          <img
            src={productimg}
            className="card-img img-fluid"
            width="96"
            height="350"
            alt={`${product}`}
          />
        </div>
      </div>
      <div className="card-body bg-light text-center">
        <div className="mb-2">
          <h6 className="font-weight-semibold mb-2">
            <Link to="#" className="productsubhead mb-2" data-abc="true">
              {product}
            </Link>
          </h6>
          <Link to="#" className="text-muted" data-abc="true">
            {category}
          </Link>
        </div>
        <Link to={`/product#${category.toLowerCase().replace(/\s+/g, "")}`}>
          <button type="button" className="btn productbtn" onClick={onClick}>
            <i className="fas fa-eye mr-2"></i>&nbsp;View
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const ProductCategory = ({ title, products, category, onClick }) => (
  <>
    <h1
      id={category}
      className="productheading border-bottom text-center mb-5 fw-bolder"
    >
      {title}
    </h1>
    <div className="container mt-50 mb-50">
      <div className="row">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            category={title}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  </>
);

const ProductPage = () => {

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
  const waterTreatment = [
    "Coagulants",
    "Flocculants",
    "Anti-Scalants",
    "Corrosion Inhibitors",
  ];

  return (
    <div className="mt-5">
     <div style={{ height: '300px', overflow: 'hidden' }}>
        <Type
          text={[
            "Chemistry Is Fun",
            "Chemists have all the Solutions",
            "Science is always the solution",
            "With Chemistry, We Can",
          ]}
        />
      </div>
      <ProductCategory
        title="Defoamers"
        products={defoamers}
        category="defoamers"
      />
      <ProductCategory
        title="Silicone Emulsions"
        products={siliconeEmulsions}
        category="siliconeemulsions"
      />
      <ProductCategory
        title="Paper and Pulp Chemicals"
        products={paperChemicals}
        category="paperandpulp"
      />
      <ProductCategory
        title="Car Care Products"
        products={carCare}
        category="carcare"
      />
       <ProductCategory
        title="Water Treatment Chemicals"
        products={waterTreatment}
        category="watertreatment"
      />
    </div>
  );
};

export default ProductPage;
