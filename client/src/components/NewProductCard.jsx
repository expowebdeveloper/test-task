import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewProductCard = ({ product }) => {
    const { src, name, to } = product;
    const navigate = useNavigate();
    return (
        < div
            className="relative w-[340px] h-[340px] mx-2 mb-6 hover:text-white"
        >
            <div className="absolute w-full flex justify-center items-center top-4  ">
                <p className="logo font-semibold z-50 ">{name}</p>
            </div>
            <img
                src={src}
                alt={name}
                className="w-full h-full object-cover"
            />
            <button
                onClick={() => navigate(to)}
                className="absolute inset-0 flex items-center justify-center
                 bg-gray-800 text-white opacity-0 hover:opacity-80 transition-opacity duration-200"
            >
                Explore →
            </button>
        </div >)
}

export default NewProductCard