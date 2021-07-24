import React, {useState} from 'react';
import Counter from './Counter';

const App = () =>{
    const [visible, setVisible] = useState(true);
    const removeHandler = () =>{
        setVisible(prevState => !prevState)
    }
    return (
        <div>
            {visible && <Counter />}
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default App;