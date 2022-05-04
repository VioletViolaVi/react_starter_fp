import React, { useState } from "react";

const TestComponent = () => {

    const [val, setVal] = useState(0);

    function handleClick(){
        setVal(prev => prev + 1);
    }

    return <>
            <h1>Test</h1>
            <div role="figure">{val}</div>
            <button onClick={handleClick}>Increment</button>
           </>
}

export default TestComponent;