import React, { useContext, useEffect, useState } from 'react';
import Title2 from './Title2';
import Title1 from './Title1';
import { ShopContext } from '../context/ShopContext';

function FoodMenu() {
  const { Products } = useContext(ShopContext); 
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
     {
      setFoodMenu(Products.slice(0, 10)); 
    }
  }, [Products]);

  return (
    <div className="container mx-auto">
      {/* Section Titles */}
      <div className="text-center mt-16 py-8 text-2xl">
        <Title2 text2="FOOD MENU" />
        <div className="mt-3">
          <Title1 text1="Fresheat Foods Menu" />
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      {/* Food Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 px-10 py-10ddxvfxc bg-gray-200 rounded-2xl md:px-8 mt-8">
        {foodMenu.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-full border"
              />
              <div>
                <h3 className="font-semibold text-base hover:text-red-600 cursor-pointer sm:text-2xl text-gray-800">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500">It's a testament to our.</p>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-md font-bold  hover:text-red-600 cursor-pointer text-gray-900">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
