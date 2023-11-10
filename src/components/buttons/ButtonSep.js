import { useState } from 'react';

function SeparateButtons() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

export default function MyApp() {
    return (
        <div className="text-center">
            <h2>Counters that update separately</h2>
            <SeparateButtons />
            <br />
            <SeparateButtons />
        </div>
    );
}