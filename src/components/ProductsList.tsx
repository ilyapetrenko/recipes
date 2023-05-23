import {useSearchProductsQuery} from "../store/reducers/productApi";
import {IProduct} from "../models/models";
import {Product} from "./Product";
import {useAppSelector} from "../hooks/selector";
import {useActions} from "../hooks/actions";
import {useEffect, useState} from "react";
import {ProductModal} from "./ProductModal";



export const ProductsList = () => {
    const { data: products, isLoading, isError } = useSearchProductsQuery();
    let currentProducts: IProduct[] | null = useAppSelector(state => state.products)
    const {addProducts} = useActions()
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {
        addProducts(products)
    }, [products])
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error occurred while fetching products</div>;
    }

    return (
        <div>
            <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="fixed top-23 right-16 inline-flex items-center justify-center border-2 border-black rounded-full bg-white px-4 py-2 text-center text-black outline-none transition-all duration-200 hover:text-white hover:bg-black text-lg">
                Add Item
            </button>
            {isModalOpen &&
                <ProductModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                />}
            <div className='flex justify-around flex-wrap max-w-5xl mt-12'>
            {currentProducts && (currentProducts as IProduct[]).map((product:IProduct) => (
                <div key={product.id}>
                    <Product prod={product}/>
                </div>
            ))}
        </div>
        </div>
    );
};
