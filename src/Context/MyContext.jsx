import { createContext, useState } from "react";

export const AuthContext = createContext();

const MyContext = ({ children }) => {
  const [valueOne, setValueOne] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const value = {
    valueOne,
    setValueOne,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default MyContext;
