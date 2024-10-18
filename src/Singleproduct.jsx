import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";

const SingleProduct = () => {
    const { product, category } = useParams(); // Extract both parameters

    const productDetails = [
      {
          category: 'defoamers',
          product: "CATALYST AF ECO - Economy Silicone Defoamer/Antifoam",
          summary: "Defoamers are silicone-based formulations designed to eliminate foam in various industrial processes, enhancing efficiency and product quality."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 715 - 15 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 715 is effective in reducing foam formation across a wide range of industrial applications."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 720 - 20 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 720 features 20% active silicone content, ideal for applications where foam control is critical."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 730 - 30 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 730 offers high-performance foam control with 30% active silicone for demanding applications."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 740 - 40 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 740 is a powerful defoamer designed for industries requiring robust foam control."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 750 - 50 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 750 provides superior performance in eliminating foam in challenging industrial processes."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF 760 - 60 Silicone Defoamer/Antifoam",
          summary: "CATALYST SAF 760 offers exceptional foam control with 60% active silicone content for critical applications."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF PP 730 Defoamer/Antifoam for Paper & Pulp",
          summary: "CATALYST SAF PP 730 is specially formulated to ensure effective foam control in the paper and pulp industry."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF SI 730 Defoamer/Antifoam for Starch Industry",
          summary: "CATALYST SAF SI 730 is designed to provide reliable foam suppression while maintaining starch product integrity."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF TP 720 Defoamer/Antifoam for ETP/STP Plants",
          summary: "CATALYST SAF TP 720 ensures optimal foam control in wastewater treatment processes."
      },
      {
          category: 'defoamers',
          product: "CATALYST SAF TP 730 Defoamer/Antifoam for ETP/STP Plants",
          summary: "CATALYST SAF TP 730 is tailored for enhancing foam control to improve operational efficiency in wastewater treatment."
      },
      {
          category: 'defoamers',
          product: "CATALYST Defoamer/Antifoam Concentrate (100 percent)",
          summary: "This concentrate is ideal for formulating customized defoamer solutions for various industrial needs."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 15 Silicone Emulsion",
          summary: "CATALYST SE 15 is a versatile formulation suitable for enhancing lubrication and surface protection in various applications."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 20 Silicone Emulsion",
          summary: "CATALYST SE 20 offers improved performance with 20% active silicone, effective in textile processing and coatings."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 30 Silicone Emulsion",
          summary: "CATALYST SE 30 enhances the properties of substrates while providing excellent water repellency."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 35 Silicone Emulsion",
          summary: "CATALYST SE 35 ensures superior stability and long-lasting effects for demanding applications."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 50 Silicone Emulsion",
          summary: "CATALYST SE 50 is a concentrated formulation ideal for applications requiring high lubrication and protection levels."
      },
      {
          category: 'silicone emulsions',
          product: "CATALYST SE 60 Silicone Emulsion",
          summary: "CATALYST SE 60, with 60% active silicone, delivers exceptional performance across a variety of demanding applications."
      },
      {
          category: 'paper and pulp chemicals',
          product: "PP Defoamer/Antifoam",
          summary: "PP Defoamer is designed specifically for the paper industry, ensuring optimal foam control during production."
      },
      {
          category: 'paper and pulp chemicals',
          product: "Fortified Rosin",
          summary: "Fortified Rosin enhances adhesion in paper manufacturing, improving the overall quality of paper products."
      },
      {
          category: 'paper and pulp chemicals',
          product: "Dry Strength Resin (DSR)",
          summary: "Dry Strength Resin (DSR) is used to improve the dry strength of paper products, enhancing durability and performance."
      },
      {
          category: 'paper and pulp chemicals',
          product: "Urea Formaldehyde Resin",
          summary: "Urea Formaldehyde Resin provides excellent bonding properties, enhancing the quality of paper products."
      },
      {
          category: 'paper and pulp chemicals',
          product: "Dispersing Agent",
          summary: "Dispersing Agent improves pigment and filler dispersion in paper manufacturing, ensuring stability and uniformity in final products."
      },
      {
          category: 'carcare',
          product: "All in One Polish",
          summary: "All in One Polish cleans, shines, and protects vehicle surfaces, providing an efficient solution for car enthusiasts."
      },
      {
          category: 'carcare',
          product: "Silicone Polish",
          summary: "Silicone Polish offers a high-gloss finish and protects surfaces from environmental damage, ideal for regular maintenance."
      },
      {
          category: 'carcare',
          product: "Tyre & Dashboard Shiner",
          summary: "Tyre & Dashboard Shiner restores and protects tires and dashboards, preventing cracking and fading."
      },
      {
          category: 'carcare',
          product: "Carnauba Wax Polish",
          summary: "Carnauba Wax Polish delivers exceptional shine and protection derived from natural Carnauba wax."
      },
      {
          category: 'carcare',
          product: "Wax Polish",
          summary: "Wax Polish provides a protective layer and enhances the shine of vehicle exterior surfaces."
      },
      {
          category: 'carcare',
          product: "Car Dry Cleaning Chemical",
          summary: "Car Dry Cleaning Chemical offers effective interior cleaning without water, removing dirt and stains conveniently."
      },
      {
          category: 'carcare',
          product: "Car Seat and Roof Cleaner",
          summary: "Car Seat and Roof Cleaner is formulated to clean upholstery and roof materials without damaging surfaces."
      },
      {
          category: 'carcare',
          product: "Car Wash Shampoo",
          summary: "Car Wash Shampoo is pH-balanced for safe washing, effectively removing dirt while protecting the vehicle's finish."
      },
      {
          category: 'carcare',
          product: "Car Wash High Foam Shampoo",
          summary: "Car Wash High Foam Shampoo penetrates dirt and grime for a deep clean while being gentle on surfaces."
      },
      {
          category: 'carcare',
          product: "Waterless Car Wash/Dry Wash",
          summary: "Waterless Car Wash/Dry Wash allows for quick cleaning without water, effectively removing dirt and leaving a protective shine."
      },
      {
          category: 'watertreatment',
          product: "Coagulants",
          summary: "Coagulants are essential for aggregating and removing suspended solids in water treatment, enhancing clarity and quality."
      },
      {
          category: 'watertreatment',
          product: "Flocculants",
          summary: "Flocculants facilitate particle aggregation in water, improving sedimentation and filtration efficiency."
      },
      {
          category: 'watertreatment',
          product: "Anti-Scalants",
          summary: "Anti-Scalants prevent scale formation in water systems, enhancing efficiency and prolonging equipment lifespan."
      },
      {
          category: 'watertreatment',
          product: "Corrosion Inhibitors",
          summary: "Corrosion Inhibitors protect water systems from corrosion, maintaining pipe integrity and improving system performance."
      },
  ];

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
      try {
          // Decode the parameters safely
          const decodedProduct = decodeURIComponent(product);
          const decodedCategory = decodeURIComponent(category.toLowerCase()); // Ensure category is lowercase
  
          // Log the decoded values for debugging
          console.log("Decoded Product:", decodedProduct);
          console.log("Decoded Category:", decodedCategory);
  
          // Find the product details that match both the decoded category and product
          const foundProduct = productDetails.find(item => 
              item.category === decodedCategory && // Compare directly
              item.product.replace(/_/g, '-') === decodedProduct // Compare directly
          );
  
          console.log(foundProduct, category, product);
          setProductDetail(foundProduct);
      } catch (error) {
          console.error("Error decoding URI components:", error);
          setProductDetail(null); // Reset to null if there's an error
      }
  }, [product, category]);
  

    return (
        <div className='container justify-content-center mt-5'>
            <div className='row mt-5'>
                <div className='col-lg mt-5'>
                    <img 
                        id="single" 
                        height={400} 
                        className='mt-3 mb-2 border shadow' // Added shadow class
                        src={productimg} 
                        alt={decodeURIComponent(product)} 
                    />
                </div>
                <div className='col-lg mt-5 pt-5'>
                    <h1 className='fw-bolder fs-1 producthead'>{decodeURIComponent(product)}</h1>
                    <p className='fw-bold text-muted productdesc h1style'>{decodeURIComponent(category)}</p>
                    <p className='text-dark'>{productDetail ? productDetail.summary : decodeURIComponent(product)}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
