import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/MyContext";
import SearchInput from "../Component/SearchInput";
import FilterByCategory from "../Component/FilterByCategory";
import FilterByBrand from "../Component/FilterByBrand";
import FilterByPrice from "../Component/FilterByPrice";
import Sorting from "../Component/Sorting";
import ProductCard from "../Component/ProductCard";
import Pagination from "../Component/Pagination";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);
  const [brands , setBrands] = useState([]);
  const [itemsPerPage] = useState(8); // Adjust as needed
  // const [searchQuery, setSearchQuery] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedBrand, setSelectedBrand] = useState('');
  // const [priceRange, setPriceRange] = useState('');
  // const [sortOption, setSortOption] = useState("");

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    sortOption,
  } = useContext(AuthContext);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.append("search", searchQuery);
    if (selectedCategory) queryParams.append("category", selectedCategory);
    if (selectedBrand) queryParams.append("brand", selectedBrand);
    if (priceRange) queryParams.append("priceRange", priceRange);
    if (sortOption) queryParams.append("sort", sortOption);
    queryParams.append("page", currentPage);
    queryParams.append("limit", itemsPerPage);

    axios
      .get(`https://product-list-ha.vercel.app/api/products?${queryParams.toString()}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
        setBrands(response.data.brands);
        setCategories(response.data.categories);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    priceRange,
    sortOption,
    currentPage,
    itemsPerPage,
  ]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      {/* <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}

      {/* <SearchInput /> */}

      <div className="flex justify-between items-center">
        {/* Filtering Options */}
        <div className="flex flex-wrap gap-4 mb-6">
          <FilterByCategory  categories={categories}/>

          <FilterByBrand  brands={brands}/>

          <FilterByPrice />
        </div>

        {/* Sorting Options */}
        <div className="mb-6">
          <Sorting />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-2">
        {products.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages} 
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
