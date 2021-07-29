import React from 'react';

const Title = ({title, subtitle}) =>{
    console.log("Title renderd");

    return (
        <>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        </>
    )
}

export default React.memo(Title);