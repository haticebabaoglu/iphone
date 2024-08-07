import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP()
  return (

   <section className='w-full nav-height bg-black relative'>
    <div className='h-5/6 w-full flex-center flex-col'>
      <p className='hero-title'>IPhone 15 Pro</p>
    </div>
   </section>
  )
}

export default Hero