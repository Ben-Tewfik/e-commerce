import React from "react";
import styles from "@/styles/cart.module.css";
export default function Receipt({ products }) {
  return (
    <div className={styles.receipt}>
      <h1 style={{ fontWeight: "bold" }}>Your Receipt:</h1>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span style={{ fontWeight: "normal", marginLeft: "45%" }}>price</span>
          <span style={{ fontWeight: "normal" }}>Quantity</span>
        </div>
        <br></br>
        <div style={{ fontSize: "12px" }}>
          {products.map((product, index) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              key={index}
            >
              <span>{product.title}</span>
              <span style={{ color: "#3498db" }}>$ {product.price}</span>
              <span> * {product.quantity}</span>
            </div>
          ))}
        </div>
        <p style={{ borderTop: "solid rgb(220,220,220) 1px" }}>
          <span>Total</span>
          <span>
            {" "}
            ${" "}
            {products
              .reduce(
                (total, product) =>
                  (total = total + product.price * product.quantity),
                0
              )
              .toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
