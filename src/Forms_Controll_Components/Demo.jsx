import React, { useState } from "react"

const Demo = (props) => {
    let [count,setCount] = useState(0)
    // let [var,function] = useState(initial_value)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      
    </div>
  )
};

export default Demo;


// import React from "react"

// const Demo = (props) => {

//   return (
//     <div>
        
//       <input type="text" onChange={(e)=>{
//         console.log(e.target.value)
//       }} />
//     </div>
//   )
// };

// export default Demo;
