import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Footer from "../../components/Footer";
import * as Realm from "realm-web";
import Link from "next/link";




export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = "e-commerce-jmhmz";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allCategories = await user.functions.getAllCategories();
        setCategories(() => allCategories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-white w-full min-h-screen">
            <Header />
            <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
      {categories.map((category) => (
        <Link href={`/products/category/${category}`} key={category}>
          <div className="bg-beige w-full  p-6 cursor-pointer hover:bg-white transition duration-300 border border-gray-300 rounded-md shadow-md min-w-0">
            {/* Ajoutez du contenu supplémentaire ici si nécessaire */}
            {category}
          </div>
        </Link>
      ))}
    </div>
           
            <Footer />
          </div>
        </div>
      );
    
}