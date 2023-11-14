import React from 'react'
import Img1 from '../component/Image1.jpeg'
import Img2 from '../component/Image2.jpeg'
import Img3 from '../component/Image3.jpeg'
import Img4 from '../component/Image4.jpeg'
import Img5 from '../component/image5.jpg'

export default function Gallery() {
  return (
    <div className='my-[20px]'>
      <p className='flex justify-center p-8 uppercase font-bold text-2xl'>Gallery</p>

      <div className='grid grid-cols-3 gap-2'>
      <img src={Img1} alt='image-1' className='object-cover w-full h-full'/>
      <img  src={Img2} alt='image-2' className='object-cover w-full h-full' />
      <img src={Img3} alt='image-3' className='object-cover w-full h-full'/>
      
        <img src={Img4} alt='image-4' className='object-cover w-full h-full col-span-2' />
        <img src={Img5} alt='image-5'className='object-cover w-full h-full col-span-1' />

      
      
      </div>

  

      
    </div>
  )
}
