import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ProductList() {
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
    return (
        <div>
          <ul className='grid grid-cols-3 '>
            {products.map(product => (
              <li className='border p-2 m-3' key={product.id}>
                <img src={product.image} alt={product.title} className='w-48 h-60'/>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating.rate}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default ProductList;