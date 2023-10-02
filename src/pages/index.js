import HomeProductsCards from "@/components/home components/HomeProductsCards"
import Link from "next/link"
import styles from "@/styles/home.module.css"
import { fetcher } from "@/util/API"
import about from "../../public/about.jpg"
import Image from "next/image"

export default function Home({ products }) {
  const bgStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/bg-shopping.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "fixed",
  }
  return (
    <main>
      <header
        className="min-h-screen bg-[#eff0ed] flex justify-center items-center"
        style={bgStyles}
      >
        <article className="text-center">
          <h1 className="text-[4rem] mb-[2rem] text-white">
            Shop the Latest Trends
          </h1>
          <p className="text-[2rem] text-center text-white">
            Explore a curated collection of fashion and electronics
          </p>
          <Link
            href="/products"
            className="inline-block py-[0.5rem] px-[1.8rem] mt-[3rem] text-center border-2 transition-all duration-500 ease-in-out border-white text-white hover:bg-[#821f40] hover:text-white hover:border-none "
          >
            <button>Shop Now</button>
          </Link>
        </article>
      </header>
      <section className="bg-neutral-100 p-10">
        <h3 className="text-center text-xl mb-5 text-red-500 font-bold">
          Shop by Category
        </h3>
        <h1 className="text-center text-3xl mb-5 font-bold">
          Popular on the So9ify store
        </h1>
        <HomeProductsCards products={products} />
      </section>
      <section>
        <div className="flex flex-wrap items-center p-12">
          <div className="lg:w-1/2">
            <Image src={about} />
          </div>
          <div className="lg:w-1/2">
            <h2 className="lg:ml-12 lg:text-3xl font-bold mt-5 mb-5 text-4xl">
              About Us
            </h2>
            <p className="lg:ml-12 lg:text-xl leading-6 lg:leading-9">
              At So9ify, we are a dedicated team of individuals united by a
              passion for bringing you an exceptional online shopping
              experience. Our focus is on offering a carefully curated selection
              of high-quality men and women clothing, exquisite jewelry, and
              cutting-edge electronics. We believe that shopping should be easy,
              enjoyable, and tailored to your unique preferences. With a
              commitment to customer satisfaction and a drive to provide the
              latest trends, we invite you to explore our store and discover the
              perfect items to enhance your lifestyle. Thank you for choosing
              So9ify as your trusted online shopping destination. Welcome to a
              world of convenience and style.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

// fetching the products
export async function getServerSideProps() {
  const products = await fetcher("")
  return { props: { products } }
}
