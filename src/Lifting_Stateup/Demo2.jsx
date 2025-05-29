import React from "react"

const Demo2 = ({count,Incr}) => {
  return (
    <div>
      <h1>Demo 2 Component</h1>
      <h1>  {count}</h1>

      <button onClick={Incr}>Incr button 2</button>
      
    </div>
  )
};

export default Demo2;
