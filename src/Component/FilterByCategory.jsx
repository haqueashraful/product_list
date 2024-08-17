import React, { useContext } from 'react';
import { AuthContext } from '../Context/MyContext';

const FilterByCategory = ({categories}) => {
    const {setSelectedCategory} = useContext(AuthContext);

    return (
        <div>
             <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {
            categories.map((category) => <option key={category} value={category}>{category.toUpperCase()}</option>)
          }
        </select>
        </div>
    );
};

export default FilterByCategory;