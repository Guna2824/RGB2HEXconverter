import React, { useState } from 'react'
import RangeCalculate from './RangeCalculate';
import RGBtoHEX from '../components/RGBtoHEX';

function ColourRange() {

  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();
  const [color, setColor] = useState([]);
  const [dan, setDan] = useState('');

  const submit =(e)=>{
    e.preventDefault();
    let arr = new Array();

    if(!red || !green || !blue){alert('Enter Red, Green, Blue value')}
    else if(red > 255 || red < 0){alert('Enter valid Red value 0 - 255')}
    else if(green > 255 || green < 0){alert('Enter valid Green value 0 - 255')}
    else if(blue > 255 || blue < 0){alert('Enter valid Blue value 0 - 255')}
    else{
      arr.push(Number(red), Number(green), Number(blue))
      
      const res = RangeCalculate(arr)
      setColor(res)
      // setRed();
      // setGreen();
      // setBlue();
    }
  }
 



  return (
    <div className='min-h-screen flex flex-col items-center justify-center my-[50px]'>
      <form className='border p-2 flex flex-col md:flex-row items-center justify-center'>
        <div>
          <label>Red</label>
          <input className='border p-1 m-2 w-14' value={(red >= 0 ? red : '') && (red <= 255 ? red : 255)} onChange={(e)=>setRed(e.target.value)} type='number' />
        </div>
        <div>
          <label>Green</label>
          <input className='border p-1 m-2 w-14' value={(green >= 0 ? green : '') && (green <= 255 ? green : 255)} onChange={(e)=>setGreen(e.target.value)}  type='number' />
        </div>
        <div>
          <label>Blue</label>
          <input className='border p-1 m-2 w-14' value={(blue >= 0 ? blue : '') && (blue <= 255 ? blue : 255)} onChange={(e)=>setBlue(e.target.value)}  type='number' />
        </div>
        <button className='px-2 py-0.5 border' type='submit' onClick={submit} >submit</button>
      </form>

      {color.length > 0 && <div className='border p-2 m-5 flex flex-wrap w-[90%] md:w-[75%] '>
        {color.map((clr, i)=><div className='border h-[75px] w-[100px] m-1 rounded-md cursor-pointer text-[12px] font-semibold shadow-lg text-center ' style={{background: clr, color: 'white' }} onMouseEnter={()=>setDan(clr)} onMouseLeave={(()=>setDan(''))} key={i}>{dan == clr ? RGBtoHEX(clr) : ''}</div>)}
      </div>}
    </div>
  )
}

export default ColourRange