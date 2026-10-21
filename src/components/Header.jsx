import React from 'react'
import Logo from '../assets/Logo.png'
import Bg from '../assets/Bg.png'

function Header() {
  return (
    <div>

        <header className="bg-cover bg-center h-[650px] w-full"
        style={{ backgroundImage: "url('/src/assets/Bg.png')" }}>

            <nav className='flex items-center justify-evenly pt-10 pb-5 bg-white'>

            <img src={Logo} alt="" />

            <ul className='flex gap-10'>

                <li><a href="#">Why Alivio</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Pricing</a></li>

            </ul>

            <div className='flex gap-5 items-center'>

                <p className='cursor-pointer'>Sign in</p>
                <button className='text-[#FFFFFF] bg-[#01996D] rounded-2xl pt-3 pb-3 pl-5 pr-5 cursor-pointer'>Start Trial</button>

            </div>

            </nav>

            <div className='pt-35 pl-30'>
              <p className='w-70 text-4xl pb-5 text-[#01996D]'>Be aware, Manage well.</p>
              <p className='w-110'>Everyone experiences stress in different ways.Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
              <button className='bg-[#01996D] py-3 px-5 mt-5 text-white cursor-pointer'>Find Your Way</button>
            </div>

      </header>
      
    </div>
  )
}

export default Header
