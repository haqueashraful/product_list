import { useContext } from "react";
import { AuthContext } from "../Context/MyContext";

const SearchInput = () => {

    const { searchQuery, setSearchQuery } = useContext(AuthContext);
    return (
        <div>
             {/* Search Input */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> 
        </div>
    );
};

export default SearchInput;