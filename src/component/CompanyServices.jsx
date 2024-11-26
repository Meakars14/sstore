import React from "react";

const CompanyServices = () => {
  const services = [
    {
      iconClass: "cart-outline",
      title: "Free delivery",
      description: "Consectetur adipi elit lorem ipsum dolor sit amet."
    },
    {
      iconClass: "quality",
      title: "Quality guarantee",
      description: "Dolor sit amet orem ipsu mcons ectetur adipi elit."
    },
    {
      iconClass: "price-tag",
      title: "Daily offers",
      description: "Amet consectetur adipi elit loreme ipsum dolor sit."
    },
    {
      iconClass: "shield-plus",
      title: "100% secure payment",
      description: "Rem Lopsum dolor sit amet, consectetur adipi elit."
    }
  ];

  return (
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 pb-3">
              <div className="icon-box d-flex">
                <div className="icon-box-icon pe-3 pb-3">
                  <svg className={service.iconClass}>
                    <use xlinkHref={`#${service.iconClass}`} />
                  </svg>
                </div>
                <div className="icon-box-content">
                  <h3 className="card-title text-uppercase text-dark">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
