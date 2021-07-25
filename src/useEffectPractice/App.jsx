import React, {useState, useEffect, createRef} from 'react';
import Finp from './Finp';

const App = () =>{
    const [fullName, setFullName] = useState({
        firstName: '',
        lastName: '',
    });
    useEffect(()=>{
        console.log('component did mount')
    },[])
    useEffect(()=>{
        console.log('component did update')
    },[fullName])

    const title = createRef();

    const submitHandler = (e) =>{
        e.preventDefault();
        if (fullName.firstName && fullName.lastName){
        console.log(fullName);
        title.current.innerHTML = `${fullName.firstName} ${fullName.lastName}`;
        } else {
            title.current.innerHTML = "you must fill inputs";
        }
    }
    const passData = (name, data) =>{
        setFullName({
            ...fullName,
            [name]: data,
        })
    }

    return (
        <form onSubmit={submitHandler} encType="application/x-www-form-urlencoded">
            <h1 ref={title}>no</h1>
            <Finp type="text" name="firstName" id="fName" data={passData} />
            <br />
            <Finp type="text" name="lastName" id="lName" data={passData} />
            <button style={{display: 'block'}} type="submit">submit</button>
        </form>
    )
}

export default App;