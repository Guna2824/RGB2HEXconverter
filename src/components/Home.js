import React,{useState, useEffect} from "react"
import rgbToHex from "./RGBtoHEX"


function Home() {
   
    const [color, setColor] = useState("#FFFFFF")
    const [rgb, setRGB] = useState()
    const [user, setUser] = useState({
        red:"",
        green:"",
        blue:""
    })
console.log(user)
console.log(rgb)
const handleChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
    setRGB(`rgb(${user.red},${user.green},${user.blue})`)
    },[user])

    const click =(e)=>{
    e.preventDefault()
    setColor(rgbToHex(rgb))
    }

    const clickMe = (e) => {
        e.preventDefault()
        setUser({
            red:"",
            green:"",
            blue:""
        })
        setColor("#FFFFFF")
    }

    

    const copyToClipboard = (event) => {
        const inputValue = event.target.value;
        const textarea = document.createElement('textarea');
        textarea.value = inputValue;
        document.body.HomeendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };


    return (
        
      <div className="h-auto w-[90%] pt-1 my-1  text-gray-800 ">
        <div className="py-2">
            <p className='text-2xl lg:text-4xl font-bold '>RGB to HEX</p>
            <p className='text-md lg:text-xl font-bold '>converter</p>    
        </div>
        <div className="my-1 md:my-4 flex flex-col items-center justify-center ">
            <form className=" w-[90%] lg:w-[70%] text-[15px] font-semibold flex flex-col justify-center items-center gap-4 py-4">
                <div className="w-[90%] flex flex-row justify-center items-center gap-2">
                    <p className=" w-[20%] text-red-700 rounded-md bg-red-600 md:bg-white">
                        <label className="invisible md:visible">RED</label>
                    </p>
                    <input name="red" type="number" className=" shadow-xl rounded-md outline-none border-2 border-red-600 pl-4 py-2 w-[80%]" value={user.red.trim()} onChange={handleChange} />
                </div>
                <div className=" w-[90%] flex flex-row justify-center items-center gap-2">
                <p className=" w-[20%] text-green-700 rounded-md bg-green-600 md:bg-white">
                        <label className="invisible md:visible">GREEN</label>
                    </p>
                    <input name="green" type="number" className=" shadow-xl rounded-md outline-none border-2 border-green-700 pl-4 py-2 w-[80%]" value={user.green.trim()} onChange={handleChange} />
                </div>
                <div className="w-[90%] flex flex-row justify-center items-center gap-2">
                <p className=" w-[20%] text-blue-700 rounded-md bg-blue-600 md:bg-white">
                        <label className="invisible md:visible">BLUE</label>
                    </p>                   
                     <input name="blue" type="number" className=" shadow-xl rounded-md outline-none border-2 border-blue-700 pl-4 py-2 w-[80%]" value={user.blue.trim()} onChange={handleChange} />
                </div>
                <div className="w-[90%] flex flex-row justify-center items-center gap-2 ">
                    <button type="submit" className="shadow-xl outline-none rounded-md w-[50%]  h-[40px] font-semibold text-white bg-yellow-400 hover:bg-yellow-600" onClick={(e)=>click(e)}>CONVERT</button>
                    <button type="reset" className="shadow-xl outline-none rounded-sm w-[30px]  h-[30px] font-semibold text-white bg-violet-600" onClick={(e)=>clickMe(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-1 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </div>
            </form>
            <div className="w-[90%] lg:w-[70%] flex flex-col items-center ">
                <div className="border-2 border-gray-700 rounded-md my-4 w-[90%] lg:w-[70%] h-[100px] lg:h-[175px] text-center text-2xl font-semibold flex flex-col justify-center items-center transition-colors delay-75" style={{background:color}} >
                    <input readOnly type="button" onClick={copyToClipboard} className="cursor-copy rounded-md py-1 px-3 lg:p-2 text-[18px] lg:text-[25px] lg:w-[35%] bg-white border " value={color}/>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
  
  export default Home