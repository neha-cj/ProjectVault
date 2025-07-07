import profileImg from './assets/kyloren.jpeg'
import { useState } from 'react'


const UserProfile = ({name, bio, email, location}) =>{
    const [showDetails,setShowDetails]= useState(false)
    return(
        <div className="PCard p-2 m-2 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 w-[400px] bg-black text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className='bg-gray-500 w-full h-[100px]'></div>
            <div>
                <img className='mt-[-75px] p-1 bg-black rounded-full' src={profileImg} alt="profile img"/>
            </div>
            <div className="text-2xl font-semibold ">{name}</div>
            <div className="profile-bio text-center text-gray-400">{bio}</div>

            {showDetails && (
                <div className='text-gray-200'>
                    <p>Email: {email}</p>
                    <p>Location: {location}</p>
                </div>
            )}

            <button className='border rounded p-2 bg-black text-red-300' onClick={()=> setShowDetails((prev) =>!prev)}>{showDetails ? "Hide": "Know More"}</button>
        </div>
    )
}

export default UserProfile