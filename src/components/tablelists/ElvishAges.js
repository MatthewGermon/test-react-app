import React, { Component } from 'react';

function CalcAge(index, olmen) {
    if (index <= olmen) {
        return index * 12;
    } else {
        return (index - olmen) * 144 + (12 * olmen);
    }
}

function CalcMEAge(index) {
    if (index <= 20) {
        return index * 10;
    } else {
        return (index - 20) * 100 + 200;
    }
}

function CalcMEFourthAgeOne(index) {
    if (index <= 20) {
        return index * 10;
    } else {
        return (index - 20) * 72 + 200;
    }
}

function CalcMEFourthAgeTwo(index) {
    if (index <= 20) {
        return index * 10;
    } else {
        return (index - 20) * 48 + 200;
    }
}

function CalcAgeSixtyFive(index) {
    if (index <= 24) {
        return index * 3;
    } else {
        return (index - 24) * 144 + 72;
    }
}

function CalcReck(index, olmen) {
    if (index <= olmen) {
        return index + " GY";
    }
    var coimen = index - olmen;
    if (coimen <= 72) {
        return coimen + " LY";
    }
    if (coimen === 73) {
        return "Old Age";
    }
    return "";
}

function CalcYeniLoar(age) {
    var result = "";
    var yen = Math.floor(age / 144);
    if (yen > 0) {
        result += yen + "Y"
    }
    var loa = age % 144;
    if (loa > 0 && yen > 0) {
        result += ", " + loa + "L"
    } else if (loa > 0) {
        result += loa + "L"
    }

    return result;
}

function Rows() {
    var rows = [];
    var index = 1;

    while (index <= 120) {
        rows.push(
            <tr>
                <td>{index}</td>
                <td>{CalcReck(index, 24)}</td>
                <td>{CalcYeniLoar(CalcAge(index, 24))}</td>
                <td>{CalcAge(index, 24)}</td>
                <td>{CalcReck(index, 18)}</td>
                <td>{CalcYeniLoar(CalcAge(index, 18))}</td>
                <td>{CalcAge(index, 18)}</td>
                <td>{CalcReck(index, 20)}</td>
                <td>{CalcYeniLoar(CalcMEAge(index, 20))}</td>
                <td>{CalcMEAge(index, 20)}</td>
                <td>{CalcYeniLoar(CalcMEFourthAgeOne(index))}</td>
                <td>{CalcMEFourthAgeOne(index)}</td>
                <td>{CalcYeniLoar(CalcMEFourthAgeTwo(index, 20))}</td>
                <td>{CalcMEFourthAgeTwo(index)}</td>
                <td>{CalcReck(index, 18)}</td>
                <td>{CalcYeniLoar(CalcAgeSixtyFive(index))}</td>
                <td>{CalcAgeSixtyFive(index)}</td>
            </tr>
        )
        index++;
    }
    return rows;
}

export default class ElvishAges extends Component {
    render() {
        return (
            <div>
                <table class="table align-top table-bordered table-dark table-sm text-center w-auto">
                    <thead>
                        <tr>
                            <th colSpan={17}>Elvish Aging</th>
                        </tr>
                        <tr>
                            <th colSpan={14}>1959</th>
                            <th colSpan={4}>1965</th>
                        </tr>
                        <tr>
                            <th rowSpan={3}>Age</th>
                            <th colSpan={6}>Aman, The Blessed Realm</th>
                            <th colSpan={7}>Middle-Earth (Ages)</th>
                            <th colSpan={2} rowSpan={3}>Age</th>
                            <th rowSpan={3}>Years</th>
                        </tr>
                        <tr>
                            <th colSpan={3}>Male</th>
                            <th colSpan={3}>Female</th>
                            <th colSpan={3}>1st-3rd</th>
                            <th colSpan={4}>4th</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Reckoning</th>
                            <th>Years</th>
                            <th colSpan={2}>Reckoning</th>
                            <th>Years</th>
                            <th colSpan={2}>Reckoning</th>
                            <th>Years</th>
                            <th colSpan={2}>Early</th>
                            <th colSpan={2}>Later</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Rows />
                    </tbody>
                </table>
                <table class="table align-top table-bordered table-dark table-sm text-center w-auto">
                    <thead>
                        <tr>
                            <th colSpan={3}>Legend</th>
                        </tr>
                        <tr>
                            <th>Abbr.</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GY</td>
                            <td>Growth Years</td>
                            <td>The period of physical growth, (<i>Olmen</i>, pl. <i>Olmendi</i>).</td>
                        </tr>
                        <tr>
                            <td>LY</td>
                            <td>Life Years</td>
                            <td>The period of adulthood, (<i>Coimen</i>, pl. <i>Coimendi</i>).</td>
                        </tr>
                        <tr>
                            <td>Y</td>
                            <td><i>Yén</i> (pl. <i>Yéni</i>)</td>
                            <td>An Elvish long year of 144 solar years.</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td><i>Löa</i> (pl. <i>Löar</i>)</td>
                            <td>An Elvish solar year.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}