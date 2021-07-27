import React from 'react';

const BtnNameHandler = ({innerTxt, eve}) =>{
    console.log("name btn renderd");
    return (
        <button onClick={eve}>{innerTxt}</button>
    )
}

export default React.memo(BtnNameHandler);