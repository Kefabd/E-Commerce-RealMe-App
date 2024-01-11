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
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
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
            {categories.map((category) => (
              <Link href={`/products/${category}`}>
                <div key={category._id}>{category}</div>
              </Link>
              
            )
              
             
                
            )}
           
            <Footer />
          </div>
        </div>
      );
    
}