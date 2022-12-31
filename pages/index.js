import Head from "next/head";
import ProductList from "../src/containers/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>React-Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
