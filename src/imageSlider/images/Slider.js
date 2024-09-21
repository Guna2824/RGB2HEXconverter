import React, { useState } from 'react'
import image1 from './images/download-1.jpg'
import image2 from './images/download-2.jpg'
import image3 from './images/download-3.jpg'
import image4 from './images/download-4.jpg'
import image5 from './images/download-5.jpg'

function Slider() {

    const [num, setNum] = useState(0);
    const images = [image1, image2, image3, image4, image5]


    const forward = () => {
        // setNum((prevNum) => (prevNum + 1) % images.length);
        num < images.length-1 ? setNum(num+1) : setNum(0)
    };

    const backward = () => {
        // setNum((prevNum) => (prevNum - 1 + images.length) % images.length);
        num > 0 ? setNum(num-1) : setNum(images.length-1)
    };


  return (
    <div className=' min-h-screen '>
        {num}
        <div className='border h-[500px] flex flex-row items-center justify-center gap-2 '>
            <button className='border px-2 py-0.5 font-bold ' onClick={backward}>{'<<'}</button>
            <div className=' h-[300px] w-[400px] p-2 '>
                {<img className='h-[100%] w-[100%] object-fill rounded-[25px]  ' src={images[num]} alt='img' /> }
            </div>
            <button className='border px-2 py-0.5 font-bold' onClick={forward}>{'>>'}</button>
        </div>
    </div>
  )
}

export default Slider