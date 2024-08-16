import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Adjust as needed
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchQuery) queryParams.append('search', searchQuery);
    if (selectedCategory) queryParams.append('category', selectedCategory);
    if (selectedBrand) queryParams.append('brand', selectedBrand);
    if (priceRange) queryParams.append('priceRange', priceRange);
    if (sortOption) queryParams.append('sort', sortOption);
    queryParams.append('page', currentPage);
    queryParams.append('limit', itemsPerPage);

    axios
      .get(`http://localhost:5000/api/products?${queryParams.toString()}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortOption, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filtering Options */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Kitchen</option>
        </select>

        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>

        <select
          onChange={(e) => setPriceRange(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Price Ranges</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>

      {/* Sorting Options */}
      <div className="mb-6">
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newestFirst">Newest First</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length ? (
          products.map(product => (
            <div
              key={product._id}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.productName}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-semibold text-blue-600 mb-2">Price: ${product.price}</p>
                <p className="text-gray-500 mb-2">Category: {product.category}</p>
                <p className="text-yellow-500 mb-2">Rating: {product.rating} ⭐</p>
                <p className="text-gray-400 text-sm">Added: {new Date(product.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-200'
            } hover:bg-blue-700 hover:text-white`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
