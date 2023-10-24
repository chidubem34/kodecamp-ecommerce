import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Home = () => {

    const { products, isLoading } = useContext(ProductContext)
    // console.log(products)
    return (
        <div>
            <section className="py-16">
                <div className="mx-10">
                    {isLoading ? <p>Loading...</p> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm justify-content-center md:max-w-none md:mx-0">
                            {products.length > 0 && products.map((product) => {
                                const { id, title, price, description, category, image, rating } = product;
                                return (
                                    <Product product={product} key={id} />
                                )
                            })}
                        </div>
                    }
                </div>
            </section>
        </div>)
}

export default Home