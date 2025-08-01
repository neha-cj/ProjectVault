import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
    return(
        <>
            <div className='bg-blue-200'>
                <div className='relative flex justify-center items-center p-2'>
                    <h1 className='text-4xl tracking-widest'>GENEV</h1>
                    <div className='absolute right-0 mr-2'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
            </div>
        </>
    )  

}
export default Header
