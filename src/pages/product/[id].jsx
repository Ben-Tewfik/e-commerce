import Image from "next/image";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/config/config";

export default function ProductPage({ product }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch the cart data from Firebase and update the cart state
    const fetchCartData = async () => {
      const cartQuery = query(
        collection(db, "cart"),
        where("title", "==", product.title)
      ); // Customize this query as needed
      const cartSnapshot = await getDocs(cartQuery);
      const cartData = cartSnapshot.docs.map(doc => doc.data());
      setCart(cartData);
    };

    fetchCartData();
  }, [product.name]); // Run this effect whenever the product name changes

  const addToCart = async () => {
    // Check if the product already exists in the cart
    const existingCartItem = cart.find(item => item.name === product.name);

    if (existingCartItem) {
      // Update the quantity of the existing item
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + quantity,
      };
      // Update the cart in Firebase
      try {
        const cartRef = collection(db, "cart");
        const cartQuery = query(cartRef, where("name", "==", product.name)); // Customize this query as needed
        const cartSnapshot = await getDocs(cartQuery);
        const docId = cartSnapshot.docs[0].id; // Assuming there's only one document with the same name
        await setDoc(doc(db, "cart", docId), updatedCartItem);
        // Update the local cart state
        const updatedCart = cart.map(item =>
          item.name === product.name ? updatedCartItem : item
        );
        setCart(updatedCart);
      } catch (error) {
        console.error("Error updating cart item:", error);
      }
    } else {
      // Item doesn't exist in cart; add it as a new document
      const newCartItem = { ...product, quantity };
      try {
        await addDoc(collection(db, "cart"), newCartItem);
        setCart(prevCart => [...prevCart, newCartItem]);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  function increment() {
    setQuantity(quantity => quantity + 1);
  }

  function decrement() {
    setQuantity(quantity => {
      const newQuantity = quantity - 1;
      return newQuantity < 1 ? 1 : newQuantity;
    });
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
