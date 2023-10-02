import styles from "@/styles/home.module.css"
import Link from "next/link"
function HomeProductsCards({ products }) {
  const firstThree = products.slice(1, 4)
  return (
    <div className={styles.products}>
      {firstThree.map((product) => {
        return (
          <section key={product.id} className={styles.product}>
            <div className={styles.ImgContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productText}>
              <p className={styles.productPrice}>${product.price}</p>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <Link
                href={`products/${product.id}`}
                className="inline-block py-[0.5rem] px-[1.8rem] mt-[3rem] text-center border-2 transition-all duration-500 ease-in-out border-black hover:bg-[#821f40] hover:text-white hover:border-none "
              >
                <button>Shop Now</button>
              </Link>
            </div>
          </section>
        )
      })}
    </div>
  )
}
export default HomeProductsCards
