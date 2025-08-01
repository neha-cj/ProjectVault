import React, {useState, useEffect} from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({onSearchChange}) {
    const [inputVal, setInputVal]=useState('')

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearchChange(inputVal);   
        }, 500)
        return () =>  clearInterval(handler)
    }, [inputVal]);

    return(
        <>
            <div className='bg-blue-200'>
                <div className='relative flex justify-center items-center p-2'>
                    <h1 className='text-4xl tracking-widest'>GENEV</h1>
                    <div className='absolute right-0 mr-2 flex items-center gap-4'>
                        <input placeholder='Search for products' type="text" className='border border-gray-300 rounded p-1 ml-4' value={inputVal} onChange={(e)=> setInputVal(e.target.value)} />       
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
                <nav className='flex justify-center space-x-4 p-2'>
                    <a href="/" className='text-blue-800 hover:text-blue-600'>Mens</a>
                    <a href="/" className='text-blue-800 hover:text-blue-600'>Womens</a>
                </nav>
            </div>
        </>
    )  

}
export default Header
