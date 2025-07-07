import profileImg from './assets/kyloren.jpeg'
const UserProfile = () =>{
    return(
        <div class="PCard p-2 m-2 border rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 w-[400px] bg-black text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <div></div>
            <div>
                <img className='w-[200px] h-auto rounded border-white' src={profileImg} alt="profile img"/>
            </div>
            <div className="text-2xl font-semibold ">Kylo Ren</div>
            <div className="profile-bio text-center">A dark warrior strong with the Force, Kylo Ren commands First Order missions with a temper as fiery as his unconventional lightsaber.</div>

            <button className='border rounded p-2 bg-black text-red-300'>Know More</button>
        </div>
    )
}

export default UserProfile