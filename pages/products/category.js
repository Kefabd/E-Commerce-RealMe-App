import React from "react";
import Header from "../../components/Header";


export default function Categories() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-white w-full min-h-screen">
            <Header />
            <Container>
              <Category
                category="Tech Wear"
                //categoryCount={`${products.length} Products`}
              />

            </Container>
            <Footer />
          </div>
        </div>
      );
    
}