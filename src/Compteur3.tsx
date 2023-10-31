import { useCallback, useState } from "react";

const Counter = (props: { value: number}) => {
    
    return (
        <div>
            <div>cpt : {props.value}</div>
        </div>
    

    )
};

export default Counter;