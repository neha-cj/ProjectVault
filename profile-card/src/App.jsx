import { useState } from 'react'

import UserProfile from './Components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center'> 
      <h1 className='text-3xl p-3' >USER PROFILE CARD</h1>
      <UserProfile />
    </div>
  )
}

export default App
