import Head from "next/head";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Category from "../components/Category";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import Products from "../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = "e-commerce-jmhmz";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.gettAllProducts();
        console.log(allProducts);
        setProducts(() => allProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <Hero />
          <Category
            category="Tech Wear"
            categoryCount={`${products.length} Products`}
          />
          
          <Products products={products} />
          <Pagination />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
