import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
            <nav className='bg-gray-200 flex gap-2'>
                <Link to="/login" className='hover:text-[#fff]'>Login</Link>
                <Link to="/home" className='hover:text-[#fff]'>Home</Link>
            </nav>
            <div className='bg-blue-200'>
                <h1 className='text-4xl text-center tracking-widest'>GENEV</h1>
                <p className='Shopping, Reimagined'></p>
            </div>
        </>
    )  

}
export default Navbar
