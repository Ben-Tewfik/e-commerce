import React from "react";
import Cart from "./Cart";
import styles from "@/styles/cart.module.css";

export default function Main() {
  // const initialProducts = [
  //   { name: "Product 1", price: 10.99, quantity: 1 },
  //   { name: "Product 2", price: 19.99, quantity: 1 },
  //   { name: "Product 3", price: 7.49, quantity: 1 },
  // ];

  return (
    <div className={styles.main}>
      <Cart />
    </div>
  );
}
