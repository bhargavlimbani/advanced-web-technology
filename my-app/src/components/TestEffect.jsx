import React, { useEffect } from 'react';

const TestEffect = () => {
    const [count, setCount] = useState(100);
    const [double, setDouble] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setDouble(2 * count);
        return () => {}        
    }, [count])

    return (
        <div>
            <center>
            <p>{count}</p>
            <p>{double}</p>
            <button onClick={handleClick}>Click me</button>
            </center>
        </div>
    )

}