import { useMemo, useState } from "react"

const Jata = () => {

    const [counter,setCounter] = useState(0)
    const [counter1 , setCounter1] = useState(0)

    const counter11 = () =>{
        setCounter(counter + 1)
    }

    const count22 = () =>{
        setCounter1(counter1 + 1)
    }

  
    }
    const ii = useMemo(()=>{
        console.log("clicked")
        let i = 0
        while(i < 20000000000) i++;
        return counter%2===0
    },[counter])
  return (
    <div className="flex items-center justify-center">
      <button onClick={counter11} className="pr-10">Counter1 : {counter}</button>
      <span>{ii?"even": "odd"}</span>
      <button onClick={count22}>Counter2 : {counter1}</button>
    </div>
  )
}

export default Jata
