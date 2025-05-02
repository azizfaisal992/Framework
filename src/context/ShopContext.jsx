import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets" // adjust path to where your products are

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [Products] = useState(products);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🛒 Add item to cart
  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] ? prev[productId] + 1 : 1,
    }));
  };

  // ❌ Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) updated[productId] -= 1;
      else delete updated[productId];
      return updated;
    });
  };

  // 🔍 Search filter
  useEffect(() => {
    const filtered = Products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, Products]);

  // 🌟 Bestseller filter
  const getBestsellers = () => {
    return Products.filter((item) => item.bestseller);
  };

  return (
    <ShopContext.Provider
      value={{
        Products,
        filteredProducts,
        cartItems,
        addToCart,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        getBestsellers,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
