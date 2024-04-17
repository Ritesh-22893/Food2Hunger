import React from "react";

const Handcraftarray = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-20 w-screen">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-6  h-96 border-2 shadow-md rounded-lg text-green-500"
        >
          <img
            src={product.image}
            alt={product.name}
            className=" h-2/5 ml-16 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2 text-sm">{product.info}</p>
          <p className="text-orange-700 font-semibold ">{product.price}</p>
          <button className="text-md w-28 mt-2 pr-5 py-2 ml-28 font-semibold  bg-blue-500 text-white rounded-3xl hover:bg-blue-600 flex justify-end text-center content-end">
            Buy Now
          </button>
        </div>  
      ))}
    </div>
  );
};

export default Handcraftarray;
