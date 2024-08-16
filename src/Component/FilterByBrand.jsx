import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';

const FilterByBrand = () => {

    const {setSelectedBrand} = useContext(AuthContext);
    return (
        <div>
             <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
        </div>
    );
};

export default FilterByBrand;