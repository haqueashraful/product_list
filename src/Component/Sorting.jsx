import { useContext } from "react";
import { AuthContext } from "../Context/MyContext";

const Sorting = () => {

    const {setSortOption} = useContext(AuthContext);

    return (
        <div>
              <select
          onChange={(e) => setSortOption(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="LowToHigh">Low to High</option>
          <option value="HighToLow">High to Low</option>
          <option value="newestFirst">Newest First</option>
        </select>
        </div>
    );
};

export default Sorting;