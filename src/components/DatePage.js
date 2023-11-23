import React, { Component } from "react";
import { Clock } from "./timesdates/Clock";

function addOrdinal(date) {
    let result = "";
    let day = parseInt(dateDay(date));
    if (day === 1 || day === 21 || day === 31) {
        result += "st";
    } else if (day === 2 || day === 22) {
        result += "nd";
    } else if (day === 3 || day === 23) {
        result += "rd";
    } else {
        result += "th";
    }
    return result;
}

function dateDay(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        { day: 'numeric' }
    ).format(date);
}

function dateWeekDay(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        { weekday: 'long' }
    ).format(date);
}

function dateMonth(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        { month: 'long' }
    ).format(date);
}

function year(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        { year: 'numeric' }
    ).format(date);
}

function numMonth(date) {
    return new Intl.DateTimeFormat(
        'en-AU',
        { month: 'numeric' }
    ).format(date);
}

function numeralDMYDate(date) {
    let result = dateDay(date) + "/" + numMonth(date) + "/" + year(date);
    return result;
}
function numeralMDYDate(date) {
    let result = numMonth(date) + "/" + dateDay(date) + "/" + year(date);
    return result;
}

function fullDate(date) {
    let result = dateDay(date) + addOrdinal(date) + " of " + dateMonth(date) + ", " + year(date);
    return result;
}


export default class DatePage extends Component {
    render() {
        let today = new Date();
        return (
            <>
                <h2>Date</h2>
                <p>The time is <Clock /></p>
                <p>Today is {dateWeekDay(today)} the {fullDate(today)}</p>
                <p>{numeralDMYDate(today)}<br />{numeralMDYDate(today)}</p>
            </>
        )
    }
}