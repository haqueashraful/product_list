
const ProductCard = ({product}) => {


    const { _id, image, productName, description, price, category, rating, createdAt } = product;
    return (
        <div>
             <div
              key={_id}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={image}
                alt={productName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {productName}
                </h3>
                <p className="text-gray-600 mb-2">{description}</p>
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