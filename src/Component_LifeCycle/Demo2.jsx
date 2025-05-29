import React, { useEffect, useState } from "react"

const Demo2 = ({display}) => {

    let [count,setCount] = useState(0)
    // useEffect(()=>{},[dependency])
    useEffect(()=>{
        console.log('Componet Create/Mount')
    },[display])

    useEffect(()=>{
        return ()=>{
            console.log('Componet UnMount/Remove')
        }
    },[display])

    useEffect(()=>{
        console.log('Changes in Component')
    },[count])

  return (
    <div>
      <h1>Demo2 Component</h1>

      <h1>  {count}</h1>

        <button onClick={()=>setCount(count+1)}>Incr</button>

    </div>
  )
};

export default Demo2;
