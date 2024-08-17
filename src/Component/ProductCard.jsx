
const ProductCard = ({product}) => {


    const { _id, productImages, productName, description, price, category, rating, createdAt } = product;
    return (
        <div>
             <div
              key={_id}
              className="border bg-white border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-[500px] "
            >
              <img
                src={productImages}
                alt={productName}
                className="w-full h-64 min-h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {productName.slice(0, 35)}
                </h3>
                <p className="text-gray-600 mb-2">{description.slice(0, 100)} </p>
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  Price: ${price}
                </p>
                <p className="text-gray-500 mb-2">
                  Category: {category}
                </p>
                <p className="text-yellow-500 mb-2">
                  Rating: {rating} ⭐
                </p>
                <p className="text-gray-400 text-sm">
                  Added: {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
        </div>
    );
};

export default ProductCard;