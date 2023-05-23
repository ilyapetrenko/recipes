import React, { useState } from 'react';
import Modal from 'react-modal';

interface ProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onRequestClose }) => {
    const [product, setProduct] = useState({
        id: 0,
        imageUrl: '',
        name: '',
        count: 0,
        size: {
            width: 0,
            height: 0
        },
        weight: '',
        comments: []
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }

    const handleWidthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            size: {
                ...prevProduct.size,
                width: parseInt(value)
            }
        }))
    }

    const handleHeightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            size: {
                ...prevProduct.size,
                height: parseInt(value)
            }
        }))
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="w-500 h-500 bg-black flex flex-col items-start justify-center"
        >
            <h2>Add new item</h2>
            <button onClick={onRequestClose} className="modal-close-button">Close</button>
            <label className={"p-4"}>
                URL:
                <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} />
            </label>
            <label className={"p-4"}>
                Name:
                <input type="text" name="name" value={product.name} onChange={handleInputChange} />
            </label>
            <label className={"p-4"}>
                Quantity:
                <input type="number" name="count" value={product.count} onChange={handleInputChange} />
            </label>
            <label className={"p-4"}>
                Width:
                <input type="number" name="width" value={product.size.width} onChange={handleWidthInputChange} />
            </label>
            <label className={"p-4"}>
                Height:
                <input type="number" name="height" value={product.size.height} onChange={handleHeightInputChange} />
            </label>
            <label className={"p-4"}>
                Weight:
                <input type="text" name="weight" value={product.weight} onChange={handleInputChange} />
            </label>
            <button onClick={() => console.log(product) //Here must be a function that will do post request with product
                 }>Confirm</button>
        </Modal>
    )
}


