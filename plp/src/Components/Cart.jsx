import React from "react"
import emptycart from '../assets/empty.jpg';
function Cart({cartItems,deleteFromCart,setCartItems, goBack}){

    return(
        <>
            <div className="p-2 flex flex-col justify-center items-center">
                <button onClick={goBack} className="mb-4 bg-blue-900 text-white rounded p-2">← Go Back</button>
                <h2>My Cart</h2>{cartItems.length === 0?(
                    <>
                        <img src={emptycart} alt='empty-cart'></img>
                        <p className="text-2xl">Your Cart is Empty</p>
                    </>
                    ):
                    (
                    <div>
                        <ul>
                            {cartItems.map((item)=>(
                                <li key={item.id}> 
                                    <img src={item.image} alt={item.title} className="w-16 h-20 object-contain" />
                                    <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                                    <p className="text-gray-700">Price: ${item.price}</p>
                                    <div className="m-2 w-[80px] border shadow bg-gray-200">
                                        <button className="p-2">+</button>
                                        <button onClick={deleteFromCart} className="p-2 cursor-pointer">-</button>
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>

    );
}
export default Cart