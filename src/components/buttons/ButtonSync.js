import { useState } from 'react';

function SyncroniseButtons({ count, onClick }) {
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
        <div className="text-center">
            <h2>Counters that update together</h2>
            <SyncroniseButtons count={count} onClick={handleClick} />
            <br />
            <SyncroniseButtons count={count} onClick={handleClick} />
        </div>
    );
}