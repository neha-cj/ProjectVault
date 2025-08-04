import emptycart from '../assets/empty.jpg';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart({cartItems,goBack, increment, decrement, deleteItem}){
    const totalCart= cartItems.reduce((sum,item) => sum+item.price*item.quantity,0);
    return(
        
        <>
            <div className="p-2 flex flex-col justify-center items-center">
                <button onClick={goBack} className="mb-4 bg-blue-900 text-white rounded p-2">← Go Back</button>
                <h2 className="text-xl font-semibold p-2 text-gray-600">My Cart</h2>{cartItems.length === 0?(
                    <>
                        <p className="text-2xl font-bold text-blue-800">Your Cart is Empty</p>
                        <img className="w-auto h-80" src={emptycart} alt='empty-cart'></img>
                    </>
                    ):
                    (
                    <div>
                        <ul>
                            {cartItems.map((item)=>(
                                <li className="p-4 border rounded shadow m-2 flex gap-3 items-center" key={item.id}> 
                                    <div className="w-[300px] text-center"> 
                                        <img src={item.image} alt={item.title} className="w-full h-40 object-contain" />
                                        <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                                    </div>
                                    <p className="text-gray-700">Price: ${item.price}</p>
                                    <div className="m-2 p-2 border shadow bg-gray-200 flex gap-2">
                                        <button onClick={()=>increment(item.id)} >+</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={()=>decrement(item.id)} >-</button>
                                    </div>
                                    <p>Total: ${(item.price * item.quantity)}</p>
                                    <button title="remove item" className='text-red-700' onClick={()=>deleteItem(item)}>
                                        <FontAwesomeIcon icon={faTrashCan} /> 
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="m-2 p-2 text-right">
                            <p className="font-semibold">Total: ${totalCart} </p> 
                            <button className="m-2 p-2 border shadow bg-blue-800 text-white rounded hover:bg-green-700">Checkout</button>
                        </div>
                    </div>
                    
                )}
            </div>
        </>

    );
}
export default Cart