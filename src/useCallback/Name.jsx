import React from 'react';

const Name = ({name}) =>{
    console.log("name renderd");
    return (
        <h3>{name}</h3>
    )
}

export default React.memo(Name);