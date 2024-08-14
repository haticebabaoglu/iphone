import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useState } from 'react'
import ModelView from './ModelView';

const Model = () => {

    const [setsize, setSetsize] = useState(small);
    const [Model, setModel] = useState({
        title:'iPhone15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

useGSAP(() => {
    // yazi alltan yukari dogru geliyor 
gsap.to("#heading" ,{ y: 0, opacity: 1})
}, []);


  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading'>
                Take a closer look.
            </h1>
            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:hh-[90vh] overflow-hidden relative'>
                    <ModelView]/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Model