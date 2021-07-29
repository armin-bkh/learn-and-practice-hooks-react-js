import React, {useState,useRef, useLayoutEffect, useEffect} from 'react';

const App = () =>{
    const paragraphRef = useRef();
    useEffect(()=>{
        // paragraphRef.current.innerHTML = 'hello';
        console.log(paragraphRef.current.innerHTML);  
    })
    useLayoutEffect(()=>{
        paragraphRef.current.innerHTML = 'hello';
        // console.log(paragraphRef.current.innerHTML);  
    })
    return (
        <div>
            <span ref={paragraphRef}></span>
        </div>
    )
}

export default App;