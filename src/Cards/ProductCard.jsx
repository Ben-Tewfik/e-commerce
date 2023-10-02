import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiFillStar } from "react-icons/ai"

export default function ProductCard({
  id,
  image,
  title,
  category,
  price,
  rating,
}) {
  return (
    <Link href={"products/" + id}>
      <div className="product ">
        <div className="w-80 h-96 ">
          <Image
            src={image}
            alt="product image"
            width={0}
            height={0}
            sizes="100vw"
            className=""
            style={{
              width: "306px",
              height: "380px",
            }}
          />
        </div>
        <p className="mt-4 text-gray-500 ">{category}</p>
        <p className="text-lg mt-2 w-80" style={{ width: "320px" }}>
          {title}
        </p>
        <div className="rating flex mt-4">
          {[...Array(Math.round(rating.rate))].map((x, i) => (
            <AiFillStar key={i} className="text-yellow-400" />
          ))}
        </div>
        <span className="mt-9 ">{price}$</span>
      </div>
    </Link>
  )
}
