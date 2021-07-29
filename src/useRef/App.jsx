import React, {useRef, useState} from 'react';
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
    const [text, setText] = useState('');
    const componentRef = useRef();
    const clickHandler = (e) =>{
        e.preventDefault();
        setText(componentRef.current.value());
        componentRef.current.focus();
    }
    return (
        <form>
            <Inp ref={componentRef} />
            <button onClick={clickHandler}>yeah</button>
            <p>{text}</p>
        </form>
    )
}

export default App;