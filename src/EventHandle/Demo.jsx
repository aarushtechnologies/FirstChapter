// /*
// import React from "react"

// const Demo = () => {

//     function show(name)
//     {
//         alert(name)
//     }

//   return (
//     <div>
//       <h1>Event Handling</h1>

//         {/* <button onClick="show()">Click</button> */}

//         {/* <button onClick={show}>Click</button> */}
        
//         {/* <button onClick={show('Aarush')}>Click</button> */}

//         <button onClick={
//             ()=>{show('Aarush')}
//         }>Click</button>

//     </div>
//   )
// };

// export default Demo;
// */

import React from "react"

const Demo = (props) => {
  return (
    <div>
      <button onClick={()=>{alert('Hello')}}>Click</button>
    </div>
  )
};

export default Demo;
