import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
        <button onClick={onClose} className="mb-4 text-right w-full text-xl">✖️</button>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4"/>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg mb-4">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
