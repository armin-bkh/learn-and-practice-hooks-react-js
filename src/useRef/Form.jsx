import React, { forwardRef, useEffect, useImperativeHandle, useState, useRef } from 'react';

const Inp = forwardRef(({eve}, ref)=>{
  const [value, setValue] = useState('');
  const inputRef = useRef();
  // useEffect(()=>{
  //   eve(value);
  // },[value])
  useImperativeHandle(ref, ()=>({
    focusHandler: ()=>{
      inputRef.current.focus();
    },
    valueHandler: ()=>{
      return inputRef.current.value
    },
  }),[])
  const changeHandler = (e) =>{
    setValue(e.target.value)
  }
  return (
    <input ref={inputRef} type="text" value={value} onChange={changeHandler}/>
  )
})

export default Inp;