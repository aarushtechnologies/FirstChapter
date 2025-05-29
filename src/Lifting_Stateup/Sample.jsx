import React, { useState } from "react"
import Sample2 from "./Sample2";

const Sample = (props) => {
    let [count,setCount] = useState(0)

    function Incr()
    {
        setCount(count+1)
    }
  return (
    <div>
        <h1>Component 1 </h1>
        <h1>{count}</h1>
        <button onClick={Incr}>Incr</button>
        <hr />
        <Sample2 count = {count} incr = {Incr} />
      
    </div>
  )
};

export default Sample;
