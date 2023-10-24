import { createContext, useState, useEffect } from 'react';
import axios from "../api/axios";

export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('/products')
            if (response.status === 200) {
                setProducts(response.data);
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return <ProductContext.Provider value={{products, isLoading}}>{children}</ProductContext.Provider>
}

export default ProductProvider