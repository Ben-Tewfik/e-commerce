import ProductCard from "@/Cards/ProductCard"
import NameFilter from "@/components/filters/NameFilter/NameFilter"
import PriceFilter from "@/components/filters/PriceFilters/PriceFilter"
import RatingFilter from "@/components/filters/RatingFilter/RatingFilter"
import Link from "next/link"
import React, { useState, useEffect } from "react"

export default function Products({ data, max }) {
  const [products, setProducts] = useState(data)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [rating, setRating] = useState()
  const [name, setName] = useState("")
  const [category, setCategory] = useState("All Products")

  const filterByPrice = () => {
    return data.filter(
      (product) => product.price <= maxPrice && product.price >= minPrice,
    )
  }

  const filterByRating = (arr) => {
    return arr.filter((product) => Math.round(product.rating.rate) === rating)
  }
  const filterByName = (arr) => {
    return arr.filter((product) => product.title.toLowerCase().includes(name))
  }

  const filter = () => {
    let filteredArray = [...data]
    if (minPrice > 0 || maxPrice < max) {
      filteredArray = filterByPrice()
    }
    if (rating) {
      filteredArray = [...filterByRating(filteredArray)]
    }
    if (name) {
      filteredArray = [...filterByName(filteredArray)]
    }
    setProducts(filteredArray)
  }

  const resetFilter = () => {
    setMaxPrice(1000)
    setMinPrice(0)
    setRating(null)
    setName("")
  }
  useEffect(() => {
    // filterByPrice()
    filter()
    // console.log()
  }, [minPrice, maxPrice, rating, name])

  useEffect(() => {
    setProducts(data)
  }, [data])

  return (
    <div className="bg-white min-h-screen">
      <div className="ml-10 mt-28">
        <div className="category">
          <h1 className="text-3xl">{category}</h1>
        </div>

        <div className="main-wrapper mt-16 flex">
          <div className="filter">
            <div className="filter-container ">
              <div className="flex justify-between items-baseline mb-8">
                <p className="text-xl ">Filter :</p>
                <button
                  onClick={resetFilter}
                  className="bg-transparent mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Reset
                </button>
              </div>
              <div className="name-filter">
                <h3 className="text-lg mb-4">Name Filter</h3>
                <NameFilter setName={setName} name={name} />
              </div>
              <div className="price-filter mt-4">
                <h3 className="text-xl mb-7">Price Filter</h3>
                <PriceFilter
                  min={0}
                  max={1000}
                  setMaxPrice={setMaxPrice}
                  setMinPrice={setMinPrice}
                />
              </div>
              <div className="rating-filter mt-28 ">
                <h3 className="text-xl mb-4">Rating filter</h3>
                <RatingFilter setRating={setRating} rating={rating} />
              </div>
            </div>
            <div className="categories-filter mt-16">
              <h3 className="text-xl">Categories</h3>
              <div className="categories-wrapper  flex flex-col gap-4 mt-4 text-gray-600">
                <Link
                  href={"/products?category=men's clothing"}
                  onClick={() => setCategory("Men's clothing")}
                >
                  {"Men's clothing"}
                </Link>
                <Link
                  href={"/products?category=women's clothing"}
                  onClick={() => setCategory("Women's clothing")}
                >
                  {"Women's clothing"}
                </Link>
                <Link
                  href={"/products?category=electronics"}
                  onClick={() => setCategory("Electronics")}
                >
                  {"Electronics"}
                </Link>
                <Link
                  href={"/products?category=jewelery"}
                  onClick={() => setCategory("Jewelery")}
                >
                  {"Jewelery"}
                </Link>
              </div>
            </div>
          </div>
          <div className="products ">
            <div className="product-wrapper flex flex-wrap gap-16 justify-around pl-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { category } = ctx.query
  let apiUrl = "https://fakestoreapi.com/products"

  if (category) {
    apiUrl += `/category/${category}`
  }

  const data = await fetch(apiUrl)
  const result = await data.json()
  const prices = result.map((product) => product.price)
  const biggestPrice = Math.max(...prices)

  return {
    props: {
      data: result,
      max: biggestPrice,
    },
  }
}
