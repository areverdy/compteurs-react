import { useCallback, useState } from "react";

const Counter = () => {
    const [compteur, setCount] = useState(0)
    
    const handleIncrement = useCallback(
        () => { setCount(compteur +1);},
        [compteur]
    )

    const handleDecrement = useCallback(
        () => {setCount(compteur -1);},
        [compteur]
    )
    
    return (
        <div>
            <div>cpt : {compteur}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    

    )
};

export default Counter;