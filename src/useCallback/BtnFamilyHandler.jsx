import React from 'react';

const BtnFamilyHandler = ({innerTxt, eve}) =>{
    console.log("family btn renderd");
    return (
        <button onClick={eve}>{innerTxt}</button>
    )
}

export default React.memo(BtnFamilyHandler);