import React from 'react'
import Image from '../assets/Image.png'
import Card from '../assets/Card.png'

function section() {
  return (
    <div className="mt-20">
      <section>
        <div className="bg-[#245852] py-15 px-10 flex flex-col md:flex-row items-center justify-between gap-10">

          <div>
            <p className="text-4xl text-white font-bold">
              Let's hear about <br /> Kayla's success story
            </p>

            <p className="text-white pt-5">
              See how well Alivio works in a real customer's life.
            </p>
            <button className='bg-[#01996D] py-3 px-5 mt-5 text-white cursor-pointer'>Let’s get started</button>
          </div>

          <div className="w-full md:w-1/2">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/ekjiUDDM-5M"
              title="Kayla's success story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

        </div>

            <div className='flex py-25'>

                <img src={Image} alt="" className='absolute top-600 left-25 w-[500px] h-[400px] object-cover rounded-xl'/>
                <img src={Card} alt="" className="absolute left-15 top-650 w-[220px] h-65 shadow-lg" />

                <div className='pl-170 pt-20'>

                    <p>Our product</p>
                    <p className='text-[#01996D text-4xl'>You tell us your stress, <br />We make your diary</p>
                    <p>Everyone experiences it, and in different ways. <br />Let Alivio guide you, in a personalized journal experience, to <br />overcome your stress.</p>
                    <button  className='bg-[#01996D] py-3 px-5 mt-5 text-white cursor-pointer'>Find Your Way</button>

                </div>

            </div>

      </section>
    </div>
  )
}

export default section
