import React, { useContext } from 'react';
import { NewContext, UseContext } from './App';
import ComponentC from './ComponentC';

const ComponentB = () =>{
    const fname = useContext(UseContext);
    const lname = useContext(NewContext);
    return (
        <>
        <h1>hi {fname} {lname}</h1>
        <ComponentC />
        </>
    )
}

export default ComponentB;