import React from "react"

const Sample2 = ({count,incr}) => {
  return (
    <div>
      <h1>Component 2 </h1>
      <h1>{count}</h1>

      <button onClick={incr}>Increment</button>
    </div>
  )
};

export default Sample2;
<h1>Component 2 </h1>