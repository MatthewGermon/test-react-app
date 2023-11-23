import { useState, useEffect } from 'react';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
  }

// function dateHour(date) {
//     return new Intl.DateTimeFormat(
//         'en-AU',
//         {
//             hour: 'numeric',
//             hour12: false
//         }
//     ).format(date);
// }

// function dateMinute(date) {
//     return new Intl.DateTimeFormat(
//         'en-AU',
//         { minute: '2-digit' }
//     ).format(date);
// }

// function dateSecond(date) {
//     return new Intl.DateTimeFormat(
//         'en-AU',
//         { second: '2-digit' }
//     ).format(date);
// }

function testTime(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        {
            hour: 'numeric',
            hour12: false,
            minute: '2-digit',
            second: '2-digit'
        }
    ).format(date);
}

function getTime(date) {
    let result = testTime(date);
    return result;
}

export function Clock() {
    const time = useTime();
    return getTime(time);
}