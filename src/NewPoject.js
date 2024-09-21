import React, { useEffect, useState } from 'react'
import axios from 'axios'

function NewPoject() {
    const [getValue, setGetValue] = useState('')
    const [data, setData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [show, setShow] = useState(true);
    const [time, setTime] = useState(0);
    const [isClicked, setClicked] = useState(false);


    useEffect(() => {
        let interval;
    
        if (!show) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    
        if (progress > 0) {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval);
    
    }, [show, progress]);
    


    const change = (e) => {
        setGetValue(e.target.value);
        setProgress(0);
        setData([]);
        setShow(true);
        setTime(0);
    }

    const submit = async (e) => {
        e.preventDefault();
        if (!getValue) {
            alert('fill input');
        } else {
            setShow(false)
            try {
                const response = await axios.get(`http://localhost:4000/`, {
                    headers: { Authorization: getValue },
                    onDownloadProgress: (progressEvent) => {
                        const total = progressEvent.total;
                        const current = progressEvent.loaded;
                        const percentage = Math.floor((current / total) * 100);
                        setProgress(percentage);
                    }
                });
                // console.log(response.data);
                setData(response.data);
                // console.log(response)
            } catch (err) {
                console.log(err);
            }
        }
    }

    const delt = (id) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData.splice(id, 1);
            return newData;
        });
    }


    const click = () => {
        setClicked(true);
        navigator.clipboard.writeText(arr);
        setTimeout(()=>{
            setClicked(false)
        },2000)
    }

    const arr = [];
    if(data.length > 0){
        for(let i = 0; i < data.length; i++){
            arr.push('#'+data[i])
        }
    }
// console.log(arr)

    return (
        <div className='min-h-screen w-[100%] flex flex-col items-center justify-start gap-2 my-5'>
           {!show && <p>Timer: {time < 10 ? '0'+time : time} seconds</p>}
            
            {/* Progress Bar */}
             <div className='w-[75%] md:w-[50%] '>
                {!show ? <div className=" bg-cyan-400 h-[25px] text-center rounded-full text-gray-700 font-bold " style={{ width: `${progress}%` , transition: 'width 1s'}}>{progress > 0 ? progress+'%' : 'Loading...'}</div> : ''}
            </div>

            <form className=' p-5 mt-5 '>
                <div className='border h-[50px] flex gap-4 rounded-[25px] shadow-md  '>
                    <input type='text' className='block  p-1  ml-5 outline-none font-semibold text-gray-700 text-[18px] ' onChange={change} placeholder='Enter Tages Gen' />
                    <button type='submit' className='block h-[100%] p-2 mr-1 ' onClick={submit}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </button>
                </div>
            </form>

           

            {/* <p className='w-[50%] text-center '>{getValue && getValue}</p> */}
            {arr.length > 0 && (
                
                <div className=' w-[75%] flex flex-wrap justify-center gap-4 p-2 my-[30px]'>
                    {arr.map((item, i) => (
                        <div key={i} className='border px-2 py-1 rounded-md shadow-md inline'>
                            { item}
                            <button className='px-2 font-bold text-red-600' onClick={() => delt(i)}>X</button>
                        </div>
                    ))}
                <div className=' w-[100%] my-3'>
                    <button className='shadow-md  h-[45px] w-[100px] rounded-[22.5px] font-bold text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-400 transition-all ease-linear ' onClick={click} >{isClicked ? 'copied!' : 'copy'}</button>
                </div>
                </div>
                
                
            )}
        </div>
    )
}

export default NewPoject

