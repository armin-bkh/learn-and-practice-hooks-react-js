import React, { useState, useEffect } from 'react';

const SearchBox = ({event}) =>{
    const [id, setId] = useState(1001);
    const changeHandler = (e) =>{
        setId(e.target.value)
    }
    useEffect(() => {
        event(id)
    }, []);
    const searchHandler =() => {
        event(id)
    }
    return (
        <div>
            <input type="text" className="searchbox" value={id} onChange={changeHandler} />
            <button type="button" className="btn" onClick={searchHandler}>Search</button>
        </div>
    )
}

export default SearchBox;