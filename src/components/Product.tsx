import React from "react";

export const Product = ({prod} : {prod: any}) => {
    return (
        <div>
            <div className='justify-between mx-2.5 my-6'>
                <img
                    className='w-40 h-40'
                    src={prod?.imageUrl}
                />
                <ul>
                    <li className="text-center"><span>{prod.name}</span></li>
                    <li><span>Left in stock - {prod.count}</span></li>
                    <button type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add
                    </button>
                </ul>
            </div>
        </div>
    )
}