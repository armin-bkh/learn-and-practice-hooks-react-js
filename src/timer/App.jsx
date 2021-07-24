import React, {useState} from 'react';
import Timer from './timer';

const App = () =>{
    const [visible, setVisible] = useState(true);
    const removeHander = () =>{
        setVisible(prevState => !prevState)
    }
    return (
        <div>
            {visible && <Timer />}
            <button onClick={removeHander}>remove</button>
        </div>
    )
}

export default App;