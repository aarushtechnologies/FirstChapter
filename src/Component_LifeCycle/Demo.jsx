import React, { useState } from "react"
import Demo2 from "./Demo2";

const Demo = (props) => {

let [display , setDisplay] = useState(true);

  return (
    <div>
      <h1>Demo Component</h1>
    {
        display ?   <Demo2 display = {display}  /> : null
    }

    <button onClick={()=>setDisplay(!display) }>Toggle</button>
    
    </div>
  )
};

export default Demo;

// 1. Mount = Create Comp
// 2. Unmount = Remove Comp
// 3. Update = Comp Change