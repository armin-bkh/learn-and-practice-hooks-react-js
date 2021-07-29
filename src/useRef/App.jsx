import React, {useEffect, useRef, useState} from 'react';
import Inp from './Form';

// const App = () =>{
//     const inputRef = useRef();
//     const pargraphRef = useRef();

//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);

//     const focusHandler = () =>{
//         inputRef.current.focus();
//         alert(pargraphRef.current.innerHTML);
//     }

//     return (
//         <div>
//         <input type="text" ref={inputRef}/>
//         <button onClick={focusHandler}>focus</button>
//         <p ref={pargraphRef}>Hello World</p>
//         </div>
//     )
// }

const App = () =>{
    const [value, setValue] = useState('');
    const componentRef = useRef();
    const btnRef = useRef();
    useEffect(()=>{
        btnRef.current.focus();
    }, [])
    const submitHanlder = (e) =>{
        e.preventDefault();
        setValue(componentRef.current.valueHandler());
        componentRef.current.focusHandler();
    }
    return (
        <form>
            <Inp ref={componentRef} eve={setValue} />
            <button ref={btnRef} onClick={submitHanlder}>focus</button>
            <p>{value}</p>
        </form>
    )
}
export default App;