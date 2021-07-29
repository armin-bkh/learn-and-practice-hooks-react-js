import { useEffect, useState } from "react";

const useTitle = (num) =>{
    const [counter, setCounter] = useState(num)
    useEffect(() => {
        setCounter(prevState => prevState + 1);
        document.title = `increment: ${counter} times`;
    },[num]);
}

export default useTitle;