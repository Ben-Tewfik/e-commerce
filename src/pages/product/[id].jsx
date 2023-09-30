import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/Config";
export default function ProductPage({ product }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    const updateProduct = { ...product, quantity };
    setCart(prevCart => [...prevCart, updateProduct]);
    console.log(cart);
    try {
      await addDoc(collection(db, "cart"), updateProduct);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  function increment() {
    setQuantity(quantity => quantity + 1);
    console.log("q is", quantity);
  }
  function decrement() {
    setQuantity(quantity => {
      const newQuantity = quantity - 1;
      if (newQuantity < 1) {
        return 1;
      } else {
        return newQuantity;
      }
    });
    console.log("q is", quantity);
  }
  return (
    <section>
      <div className=" h-[670px] w-[580px] object-cover overflow-hidden ">
        <img src={product.image} alt={product.title} fill />
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <p className="text-gray-500">{product.category}</p>
        <h1 className="text-violet-600 text-3xl font-bold ">{product.title}</h1>
        <p className="text-gray-700">{product.description} </p>
        <h4 className="text-2xl font-bold bg-grey-200 ">${product.price}</h4>
        <div></div>
        <div className="flex flex-row gap-10 ">
          <div className="flex flex-row   gap-2 items-center ">
            <button
              className="bg-gray-200 rounded-lg py-4 px-6"
              onClick={decrement}
            >
              -
            </button>
            <span className="bg-gray-200 rounded-lg py-4 px-6">{quantity}</span>
            <button
              onClick={increment}
              className="bg-gray-200 rounded-lg py-4 px-6"
            >
              +
            </button>
          </div>
          <button
            onClick={addToCart}
            className="bg-white w-full border-2 item-center "
          >
            Add To Cart
          </button>
        </div>
        <div>
          <button className="bg-white w-full border-2 py-4 px-6 item-center ">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
}
