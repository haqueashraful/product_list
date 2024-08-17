import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';

const FilterByBrand = ({ brands }) => {

    const {setSelectedBrand} = useContext(AuthContext);

    return (
        <div>
             <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          {
            brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)
          }
          {/* <option value="brandA">Brand A</option> */}
          {/* <option value="brandB">Brand B</option> */}
          {/* <option value="brandC">Brand C</option> */}
        </select>
        </div>
    );
};

export default FilterByBrand;