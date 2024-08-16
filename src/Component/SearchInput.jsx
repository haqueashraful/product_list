import { useContext, useState } from "react";
import { AuthContext } from "../Context/MyContext";

const SearchInput = () => {

    const { searchQuery, setSearchQuery } = useContext(AuthContext);
    const [inputValue, setInputValue] = useState(searchQuery);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(inputValue);
        // Add your search logic here, using searchQuery or inputValue
        console.log("Searching for:", inputValue);
    };

    return (
        <div className="flex items-center mb-3">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by product name..."
                value={inputValue}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="ml-4 p-3 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;
