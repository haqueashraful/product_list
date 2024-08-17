
const ProductCard = ({product}) => {


  function formatDateTime(dateString) {
    // Extract year, month, day, hour, minute, and second
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    const hour = dateString.slice(8, 10);
    const minute = dateString.slice(10, 12);
    const second = dateString.slice(12, 14);
  
    const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`);
  
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  
  
    const { _id, productImages, productName, description, price, category, rating, createdTime } = product;


    return (
        <div>
             <div
              key={_id}
              className="border bg-white border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] "
            >
              <img
                src={productImages}
                alt={productName}
                className="w-full h-72 min-h-72 object-cover object-center rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {productName.slice(0, 35)}
                </h3>
                <p className="text-gray-600 mb-2">{description.slice(0, 100)} </p>
               <div className="flex justify-between items-center">
               <p className="text-lg font-semibold text-blue-600 mb-2">
                  Price: ${price}
                </p>
                <p className="text-gray-500 mb-2">
                  Category: {category}
                </p>
               </div>
               <div className=" flex justify-between items-center">
               <p className="text-yellow-500 mb-2">
                  Rating: {rating} ⭐
                </p>
                <p className="text-gray-400 text-sm">
                  Added: {formatDateTime(createdTime)}
                </p>
               </div>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;