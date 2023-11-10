import { useState } from 'react';

function MyButtonOne() {
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

function MyButtonTwo({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Counters that update separately</h2>
            <MyButtonOne />
            <br />
            <MyButtonOne />
            <h2>Counters that update together</h2>
            <MyButtonTwo count={count} onClick={handleClick} />
            <br />
            <MyButtonTwo count={count} onClick={handleClick} />
        </div>
    );
}