import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ProductList({searchTerm}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    }, []);

    const filteredproducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <ul className='grid grid-cols-3 gap-6'>
          {filteredproducts.map(product => (
          <li className='p-4 ' key={product.id}>
            <img src={product.image} alt={product.title} className='w-48 h-60 '/>
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-yellow-600">Rating: {product.rating?.rate}</p>
          </li>
          ))}
        </ul>
      </div>
    );

}

export default ProductList;