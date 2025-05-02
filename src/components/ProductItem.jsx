import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition duration-300 p-4"
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-gray-800 truncate">{name}</h1>
        <p className="text-sm text-gray-500 mt-1">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="text-md font-bold text-gray-900 mt-2">
          {currency}{price}
        </p>

        {/* Button */}
        <div className="mt-4">
          <Button text="Buy Now" />
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
