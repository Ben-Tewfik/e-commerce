import React, { useState, useEffect } from "react"
import Cart from "./Cart"
import styles from "@/styles/cart.module.css"

export default function Main() {
  return (
    <div className={styles.main}>
      <Cart />
    </div>
  )
}
