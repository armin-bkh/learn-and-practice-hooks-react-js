import { useEffect, useState } from "react";

const useTitle = (counter) =>{
    const [num , setNum] = useState(0);
    useEffect(()=>{
        setNum(counter);
        document.title = `increment ${counter} times`;
        return ()=>{
            document.title = "React App";
        }
    }, [counter])
}

export default useTitle;