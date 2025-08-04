import React, {useState, useEffect} from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ onSearchChange, onCategoryChange, cartCount, onCartClick }) {
  const [inputVal, setInputVal] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearchChange(inputVal);   
        }, 500)
        return () =>  clearInterval(handler)
  }, [inputVal, onSearchChange]);

  return (
    <div className="bg-blue-200">
        <div className="relative flex justify-center items-center p-2">
            <h1 className="text-4xl tracking-widest">GENEV</h1>
            <div className="absolute right-0 mr-4 flex items-center gap-4">
                <input placeholder='Search for products' type="text" className='border border-gray-300 rounded p-1 ml-4' value={inputVal} onChange={(e)=> setInputVal(e.target.value)} /> 
                <div className="relative">
                    <button onClick={onCartClick}><FontAwesomeIcon icon={faCartShopping} /> </button>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
                    )}
                </div>
            </div>
        </div>
        <nav className='flex justify-center space-x-4 p-2'>
            <button  className='text-blue-800 hover:text-blue-600' onClick={()=> onCategoryChange('men\'s clothing')}>Mens</button>
            <button className='text-blue-800 hover:text-blue-600' onClick={()=> onCategoryChange(`women's clothing`)}>Womens</button>
        </nav>
    </div>
  );
}
export default Header