import React, { useState } from "react"
import Demo2 from "./Demo2";

const Demo = (props) => {
    let [count,setCount] = useState(0)
    // let [var,function] = useState(initial_value)
    function Incr()
    {
        setCount(count+1)
    }

  return (
    <div>
        <h1>Demo 1 Component</h1>
        <h1>{count}</h1>
        {/* <button onClick={()=>{setCount(count+1)}}>Increment</button> */}

        <button onClick={Incr}>Increment</button>

        
        {/* <Demo2 name="Aarush"  /> */}
        <Demo2 count={count} Incr={Incr} />
      
    </div>
  )
};

export default Demo;
// Props = share values
// state lifting up = share states , logic
