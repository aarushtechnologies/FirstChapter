/*
//Outside Condtional rendering
import React from "react"

const Demo = (props) => {
    
    let isLogin = true;

    if(isLogin)
    {
        return (
        <div>
            <h1>Home Page</h1>
        </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Login Page</h1>
            </div>

        )
    }

  
};

export default Demo;
*/

// Inside jsx - Conditional Rendering

import React from "react"

const Demo = (props) => {
    let isLogin = true
    return (
        <div>
            <h1>Condtional Rendering</h1>
            {
                isLogin ? <h1>Home Page</h1> : <h1>Login Page</h1>
            }

            <hr />

            {
                isLogin ? <h1>Ramram</h1> : <h1>Shamsham</h1>
            }
            <hr />
            {
                isLogin && <h1>Home Page</h1>
            }
            <hr />

            {
                //    (()=>{})()
                (() => {
                    if (isLogin) {
                        return (
                            <h1>Home Page - if else inside jsx using iife</h1>
                        )
                    }
                })()
            }


            {
                //    (()=>{})()
                (() => {
                    if (isLogin) {
                        return (
                            <h1>Home Page - if else inside jsx using iife</h1>
                        )
                    }
                })()
            }
        </div>
    )
};

export default Demo;


//conditional Rendering -if else,switch , ?: (ternary Op) ,&& operator
// 1. Outside JSX - if else, switch
// 2. Inside JSX - ?: (ternary Op) ,&& operator
//Inside JSX - we cannot use if else directly - IIFE