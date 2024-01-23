import React from 'react'
import { useCallback, useEffect, useState } from "react";


const Pass = () => {
    const [password,setPassword] = useState('');
    const [number,setNumber] = useState(false);
    const [spacialchar , setSpacialchar] = useState(false);
    const [length , setLength] = useState(8);
   
  
    const passgenrator = useCallback(() =>{
          let pass ="";
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
          if(number) str += "0123456789";
          if(spacialchar) str += "!@#$%^&*()_+";
          
          for( let i = 1;i <= length;i++){
            let char = Math.floor(Math.random() *  str.length + 1);
            pass += str.charAt(char)
          }
  
          setPassword();
          
    }, [number, spacialchar, length, password] )
  
  
    useEffect(() =>{
        passgenrator();
    },[length,number, spacialchar, passgenrator])
        
  return (
   <>
   <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
   
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
           
      <h1>Password Genrator</h1>
          <input
          
          type="text"
          value={password}
          className="outlien-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          />

          <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex text-sm gap-x-1">
            <input

              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => (setLength(e.target.value))}

            />
            <label>Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input

            type="checkbox"
            defaultChecked={number}
            id="number"
            onChange={( )=> {
              setNumber((prev) => (!prev))
            }}


          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input

            type="checkbox"
            defaultChecked={spacialchar}
            id="spacialchar"
            onChange={( )=> {
              setSpacialchar((prev) => (!prev))
            }}


          />
          <label>Number</label>
        </div>
      </div>
   </div>
   </>
    </div>
  )
}

export default Pass
