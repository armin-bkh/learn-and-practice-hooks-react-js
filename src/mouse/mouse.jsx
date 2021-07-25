import React, {useState, useEffect} from 'react';

const Mouse = () =>{
    const [values, setValue] = useState({
        x: 0,
        y: 0
    });
    const logMouseMove = (e) =>{
        setValue({
            x: e.clientX,
            y: e.clientY,
        })
        console.log("x and z client");
    }
    useEffect(()=>{
        window.addEventListener('mousemove', logMouseMove);
        return() =>{
            window.removeEventListener('mousemove', logMouseMove);
        }
    },[])
    return (
        <React.Fragment>
            <h1>x: {values.x}</h1>
            <h1>y: {values.y}</h1>
        </React.Fragment>
    )
}
export default Mouse;