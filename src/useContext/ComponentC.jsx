import React, { useContext } from 'react';
import { NewConsumer, NewContext, UseContext, UseCosumer } from './App';
const ComponentC = () => {
    // const fname = useContext(UseContext);
    // const lname = useContext(NewContext);
    return (
        <UseCosumer>
            {
                val =>{
                    return (
                    <NewConsumer>
                       {
                           (val2)=>{
                               return <h1>hi {val} {val2}</h1>
                           }
                       }
                    </NewConsumer>
                    )
                }
            }
        </UseCosumer>

        // /* <h1>hi {fname} {lname}</h1> */
    )
}

export default ComponentC;
