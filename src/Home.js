import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase4/P4_Header_PC_1500x178_English.jpg"
        />
        <div className="home__row">
          <Product
            title={"The lean muscle"}
            image="https://images-eu.ssl-images-amazon.com/images/I/21be6baoceL._AC_SX184_.jpg"
            price="29.99"
            rating={2}
          />
          <Product
            title={"The lean muscle"}
            image="https://images-eu.ssl-images-amazon.com/images/I/21be6baoceL._AC_SX184_.jpg"
            price="29.99"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title={"The lean muscle"}
            image="https://images-eu.ssl-images-amazon.com/images/I/21be6baoceL._AC_SX184_.jpg"
            price="29.99"
            rating={5}
          />
          <Product
            title={"The lean muscle"}
            image="https://images-eu.ssl-images-amazon.com/images/I/21be6baoceL._AC_SX184_.jpg"
            price="29.99"
            rating={5}
          />
          {/*product*/}
          {/*product*/}
        </div>
        <div className="home__row">
          <Product
            title={"The lean muscle"}
            image="https://images-eu.ssl-images-amazon.com/images/I/21be6baoceL._AC_SX184_.jpg"
            price="29.99"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
