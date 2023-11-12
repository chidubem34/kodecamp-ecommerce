/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

const Home = () => {

    const { products, isLoading } = useContext(ProductContext)
    // console.log(products)
    return (
        <div>
            <Header />
            <Sidebar />
            <section className="py-16">
                <div className="mx-10">
                    {isLoading ? <div className="h-screen justify-center text-3xl font-bold tracking-widest items-center flex">Loading...</div> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm justify-content-center md:max-w-none md:mx-0">
                            {products.length > 0 && products.map((product) => {
                                // eslint-disable-next-line no-unused-vars
                                const { id, title, price, description, category, image, rating } = product;
                                return (
                                    <Product product={product} key={id} />
                                )
                            })}
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </div>)
}

export default Home