import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/Api';
import ProductModal from './ProductModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 w-[90%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg cursor-pointer" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg">${product.price}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;
