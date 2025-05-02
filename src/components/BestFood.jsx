import React, { useContext, useEffect, useState } from 'react';
import Title2 from './Title2';
import Title1 from './Title1';
import ProductItem from './ProductItem'; // make sure this file exists
import { ShopContext } from '../context/ShopContext';
import Button from '../shared/Button';

function BestFood() {
  const { Products } = useContext(ShopContext);
  
  
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(Products)) {
      setBestProducts(Products.slice(0, 3));
    }
  }, [Products]);

  return (
    <div className='container mx-auto'>
      <div className='text-center mt-[60px] py-8 text-2xl'>
        <Title2 text2="BEST FOOD" />
        <div className='mt-3'>
          <Title1 text1="BEST SELLING DISHES" />
        </div>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text:base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      <div className=' items-center grid grid-cols-2 sm:grid-cols-3  gap-4 gap-y-6'>
        {
          bestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
}

export default BestFood;
