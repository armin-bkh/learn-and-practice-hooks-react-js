import React, {useState, useEffect} from 'react';

const Timer = () =>{
    const [time, setTime] = useState(0);
    // useEffect(()=>{
    //     let counter = setInterval(()=>{
    //         setTime(prevState => prevState + 1);
    //     }, 1000)
    //     return() =>{
    //         clearInterval(counter);
    //     }
    // },[])
    useEffect(()=>{
            let counter = setInterval(()=>{
                setTime(time + 1);
            }, 1000)
            return() =>{
                clearInterval(counter);
            }
        },[time])
    return (
        <h1>{time}</h1>
    )
}

export default Timer;