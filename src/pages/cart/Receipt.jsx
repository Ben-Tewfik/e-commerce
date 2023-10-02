import React from "react"
import styles from "@/styles/cart.module.css"
export default function Receipt({ products }) {
  return (
    <div className={styles.receipt}>
      <h1 style={{ fontWeight: "bold" }}>Your Receipt:</h1>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "1rem",
          }}
        >
          <span
            style={{
              fontWeight: "normal",
              marginLeft: "45%",
              fontSize: "0.9rem",
            }}
          >
            price
          </span>
          <span style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
            Quantity
          </span>
        </div>
        <br></br>
        <div className="ms-5 text-xs">
          {products.map((product, index) => (
            <div className="flex flex-row" key={index}>
              <span className="truncate basis-3/4">{product.title}</span>
              <span
                className="truncate basis-3/5 mx-1"
                style={{ color: "#3498db" }}
              >
                $ {product.price}
              </span>
              <span className="truncate basis-1/5">
                {" "}
                <span style={{ color: "red" }}>*</span> {product.quantity}
              </span>
            </div>
          ))}
        </div>
        <div
          className="mx-2 font-semibold my-2 text-base text-black"
          style={{
            borderTop: "solid rgb(220,220,220) 1px",
            marginTop: "5%",
            padding: "4%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total</span>
          <span>
            $
            {products
              .reduce(
                (total, product) =>
                  (total = total + product.price * product.quantity),
                0,
              )
              .toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
