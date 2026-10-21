import React from 'react'
import Not from '../assets/01.png'
import Doc from '../assets/02.png'
import Wom from '../assets/03.png'


function How() {
  return (
    <div>
      <div  className='pt-20 flex justify-center gap-15 '>
        <p className='text-4xl text-[#01996D]'>Understand & Release <br />
        the stress in 3 steps</p>
        <p>Alivio offers as many journals it takes, tackling different areas such as <br /> anxiety, overwhelmedness, sadness, or anger, and a variety of personal <br />causes, to help you become aware of your emotions, and guide you in how <br /> to manage stress.</p>

        </div>
        
        
        <div className='flex justify-center mt-40 gap-30'>

            <img src={Not} alt="" className='h-150 ' />

            <img src={Doc} alt="" className='h-150 mt-50' />

            <img src={Wom} alt="" className='h-150 mt-15' />

        </div>

    </div>
  )
}

export default How
