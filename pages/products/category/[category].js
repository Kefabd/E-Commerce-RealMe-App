import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Pagination from "../../../components/Pagination";
import Products from "../../../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { query } = useRouter();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
        if (query.category) {
            // add your Realm App Id to the .env.local file
            const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                const user = await app.logIn(credentials);
                const allProducts = await user.functions.getProductsCategories(query.category);
                setProducts(() => allProducts);
            } catch (error) {
                console.error(error);
            }
        }
    };
    fetchData();
  });
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <h1>{query.category}</h1>
          <h2>{products.length} Produits</h2>
          <Products products={products} />
          <Pagination />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
