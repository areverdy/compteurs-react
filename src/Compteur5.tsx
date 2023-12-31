import { useCallback, useState, useMemo } from "react";

const Counter = (props: { value: number}) => {
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
            <div>cpt : {props.value}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    

    )
};

export default Counter;