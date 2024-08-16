import { useContext } from "react";
import { AuthContext } from "../Context/MyContext";

const FilterByPrice = () => {
const {setPriceRange} = useContext(AuthContext);

    return (
        <div>
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
    );
};

export default FilterByPrice;