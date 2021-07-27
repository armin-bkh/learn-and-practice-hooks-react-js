import React from 'react';

const Family = ({family}) =>{
    console.log("family renderd");
    return (
        <h3>{family}</h3>
    )
}

export default React.memo(Family);