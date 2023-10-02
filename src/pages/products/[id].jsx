import Image from "next/image"

import {
  doc,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "@/config/config"

export default function ProductPage({ product }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [showNotification, setShowNotification] = useState(false)

  // Call the function to get product IDs
  const addToCart = async () => {
    const updateProduct = { ...product, quantity }
    setCart((prevCart) => [...prevCart, updateProduct])
    console.log(cart)
    try {
      await addDoc(collection(db, "cart"), updateProduct)
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  function incremenet() {
    setQuantity((quantity) => quantity + 1)
    console.log("q is", quantity)
  }
  function decrement() {
    setQuantity((quantity) => {
      const newQuantity = quantity - 1
      if (newQuantity < 1) {
        return 1
      } else {
        return newQuantity
      }
    })
    console.log("q is", quantity)
  }

  return (
    <section className="text-gray-900 mt-20 p-8">
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="flex justify-center items-center md:w-3/5">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
          />
        </div>

        <div className="flex-auto flex flex-col gap-4 md:w-3/5">
          <p className="text-gray-500">{product.category}</p>
          <h1 className="text-blue-600 text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <h4 className="text-2xl font-bold">${product.price}</h4>
          <div></div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-2 items-center">
              <button
                className="bg-gray-200 rounded-lg py-4 px-6 hover:bg-blue-600 hover:text-white"
                onClick={decrement}
              >
                -
              </button>
              <span className="bg-white border-blue-600 border-2 rounded-lg py-4 px-6">
                {quantity}
              </span>
              <button
                className="bg-gray-200 rounded-lg py-4 px-6 hover:bg-blue-600 hover:text-white"
                onClick={incremenet}
              >
                +
              </button>
            </div>

            <button
              className="bg-white text-blue-600 w-full border-2 border-blue-600 py-4 px-6 text-center hover:bg-blue-600 hover:text-white hover:border-white"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
          <div>
            {/* <button className='bg-white w-full border-2 border-violet-600 py-4 px-6 text-center  hover:text-white hover-border-white text-black'>Buy Now</button> */}
          </div>
        </div>
      </div>
      {showNotification && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-600  border-blue-600 border-2 p-4 rounded-xl text-white">
          Product Added to Cart Successfully!
        </div>
      )}
    </section>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await response.json()

  return {
    props: {
      product,
    },
  }
}
