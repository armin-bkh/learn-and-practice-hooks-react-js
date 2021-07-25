import React, {useEffect, useState} from 'react';

const Finp = ({type, name, id, data}) =>{
    const [value, setValue] = useState('');
    useEffect(()=>{
        data(name, value);
    },[value])

    const changeHandler = (e) =>{
        setValue(e.target.value)
    }
    
    return (
        <>
        <label style={{marginRight: '5px'}} htmlFor={id}>{name}:</label>
        <input type={type} name={name} id={id} value={value} onChange={changeHandler}/>
        </>
    )
}

export default Finp;