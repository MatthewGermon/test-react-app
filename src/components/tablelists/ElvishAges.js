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
        return (index - 20) * 72 + 120;
    }
}

function CalcMEFourthAgeTwo(index) {
    if (index <= 20) {
        return index * 10;
    } else {
        return (index - 20) * 48 + 60;
    }
}

function CalcAgeSixtyFive(index) {
    if (index <= 24) {
        return index * 3;
    } else {
        return (index - 24) * 144 + (3 * 24);
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
        return "Vinimetta";
    }
    return "";
}

// function CalcYeniLoar(age) {
//     var result = "";
//     var yen = Math.floor(age / 144);
//     if (yen > 0) {
//         result += yen + " yén"
//     }
//     var loa = age % 144;
//     if (loa > 0 && yen > 0) {
//         result += ", " + loa + " löa"
//     } else if (loa > 0) {
//         result += loa + " löa"
//     }

//     return result;
// }

function Rows() {
    var rows = [];
    var index = 1;

    while (index <= 120) {
        rows.push(
            <tr>
                <td>{index}</td>
                <td>{CalcReck(index, 24)}</td>
                {/* <td>{CalcYeniLoar(CalcAge(index, 24))}</td> */}
                <td>{CalcAge(index, 24)}</td>
                <td>{CalcReck(index, 18)}</td>
                {/* <td>{CalcYeniLoar(CalcAge(index, 18))}</td> */}
                <td>{CalcAge(index, 18)}</td>
                <td>{CalcReck(index, 20)}</td>
                {/* <td>{CalcYeniLoar(CalcMEAge(index, 20))}</td> */}
                <td>{CalcMEAge(index)}</td>
                {/* <td>{CalcYeniLoar(CalcMEFourthAgeOne(index, 20))}</td> */}
                <td>{CalcMEFourthAgeOne(index)}</td>
                {/* <td>{CalcYeniLoar(CalcMEFourthAgeTwo(index, 20))}</td> */}
                <td>{CalcMEFourthAgeTwo(index)}</td>
                <td>{CalcReck(index, 18)}</td>
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
                            <th colSpan={9}>Elvish Aging (1959)</th>
                            <th colSpan={2}>Elvish Aging (1965)</th>
                        </tr>
                        <tr>
                            <th rowSpan={2}>Age</th>
                            <th colSpan={4}>Aman</th>
                            <th colSpan={4}>Middle-Earth (Ages)</th>
                            <th rowSpan={2}>Age</th>
                            <th rowSpan={2}>Elvish<br />Reckoning</th>
                        </tr>
                        <tr>
                            <th>Elvish<br />Reckoning</th>
                            <th>Male</th>
                            <th>Elvish<br />Reckoning</th>
                            <th>Female</th>
                            <th>Elvish<br />Reckoning</th>
                            <th>1st-3rd</th>
                            <th>4th Age<br />(Early)</th>
                            <th>4th Age<br />(Later)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Rows />
                    </tbody>
                </table>
            </div>
        )
    }
}