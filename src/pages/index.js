import Link from "next/link";

export default function Home({ products }) {
  console.log(products.products);
  return (
    <div>
      {products.products.map(product => {
        return (
          <>
            <img src={product.images[0]} alt="" />
            <h1>{product.title}</h1>;
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  return { props: { products } };
}
