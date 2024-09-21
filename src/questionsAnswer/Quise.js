import React, { useState } from 'react'

function Quise() {

    const qest = [
        {q:'apple is fruite ?',
        a: ['yes','no','maybe','not sure'],
        ans:'yes'},
        {q:'what is the capital of india ?',
        a: ['delhi','mumbai','chennai','kolkata'],
        ans:'delhi'},
        {q:'what is the capital of tamilnadu ?',
        a: ['delhi','mumbai','chennai','kolkata'],
        ans:'chennai'},
        {q:'what is the capital of karnataka ?',
        a: ['delhi','mumbai','chennai','bangalore'],
        ans:'bangalore'},
      ]

    const [roll, setRoll] = useState(0);
    const [answer, setAnswer] = useState(Array(qest.length).fill(''));

    const handleChange =(value, i)=>{
        const newAnswer = [...answer];
        newAnswer[i] = value;
        setAnswer(newAnswer);
    }

    const forward = ()=>{
        roll > qest.length-2 ? setRoll(0) : setRoll(roll+1)
    }

    const backward = ()=>{
        roll < 1 ? setRoll(qest.length-1) : setRoll(roll-1)
    }




  return (
    <div className='min-h-screen flex flex-col items-center justify-center my-[50px]'>
        <div className='border h-[250px] w-[500px] flex flex-row items-center justify-between p-5 gap-3 '>
        <button className='border px-2 py-0.5 font-bold' onClick={backward}>{'<<'}</button>

            {qest.map((item, i)=> <div key={i} className='border p-5 h-[100%] w-[100%] flex flex-col gap-2' >
                <p>{i+1+'. '}{item.q.toUpperCase()}</p>
                <ul>
                    {item.a.map((itm, e)=><li key={e}><input  type='radio' name={`question-${i}`} value={itm} onClick={()=>handleChange(itm, i)} />{' '}{itm.toUpperCase()}</li>)}
                </ul>
                {answer[i] !== '' && (<p>{answer[i] === item.ans ? <span className='border px-2 py-1  bg-green-500 text-white font-semibold'>correct</span>: <span className='border px-2 py-1  bg-red-500 text-white font-semibold'>wrong</span>}</p>)}
            </div>
            
            )[roll]}
        
        <button className='border px-2 py-0.5 font-bold' onClick={forward}>{'>>'}</button>
    </div>
    {/* {answer.map((item)=>item)} */}
    </div>
  )
}

export default Quise