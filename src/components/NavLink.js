import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import NestOne from './nestedlinks/NestOne';
import NestTwo from './nestedlinks/NestTwo';
import NestThree from './nestedlinks/NestThree';
import ButtonOne from './buttons/ButtonOne';
import ButtonTwo from './buttons/ButtonTwo';
import ButtonThree from './buttons/ButtonThree';
import TicTacToe from './games/TicTacToe';
import ElvishAges from './tablelists/ElvishAges';
import Registration from './Registration';
import Login from './Login';

function NestedNest() {
    document.title = "Nested Nests";
    return (
        <div>
            <h1>Nested Nest!</h1>
            <p>A nested navigation within a nested navigation!</p>
            <p>
                | <Link to="NestThree">Nest 3</Link> |
            </p>
            <Routes>
                <Route path="NestThree" element={<NestThree />} />
            </Routes>
        </div>
    );
}

function NestedNavLink() {
    document.title = "Nexted Navigation";
    return (
        <div>
            <h1>Nested Navigation</h1>
            <p>A nested navigation within a navigation link.</p>
            <p>
                | <Link to="NestOne">Nest 1</Link> |&nbsp;
                <Link to="NestTwo">Nest 2</Link> |&nbsp;
                <Link to="NestedNest">Nested Nest</Link> |
            </p>
            <Routes>
                <Route path="NestOne" element={<NestOne />} />
                <Route path="NestTwo" element={<NestTwo />} />
                <Route path="NestedNest/*" element={<NestedNest />} />
            </Routes>
        </div>
    );
}

function NestedButtons() {
    document.title = "Buttons";
    return (
        <div>
            <h1>Button Types</h1>
            <p>Different button types that can be implemented.</p>
            <p>
                | <Link to="ButtonOne">Alert</Link> |&nbsp;
                <Link to="ButtonTwo">Separate</Link> |&nbsp;
                <Link to="ButtonThree">Syncronised</Link> |&nbsp;
            </p>
            <Routes>
                <Route path="ButtonOne" element={<ButtonOne />} />
                <Route path="ButtonTwo" element={<ButtonTwo />} />
                <Route path="ButtonThree" element={<ButtonThree />} />
            </Routes>
        </div>
    )
}

function NestedTables() {
    document.title = "Tables";
    return (
        <div>
            <h1>Tables Pages</h1>
            <p>Different table implementations.</p>
            <p>
                | <Link to="ElvishAges">Elvish Ages</Link> |
            </p>
            <Routes>
                <Route path="ElvishAges" element={<ElvishAges />} />
            </Routes>
        </div>
    )
}

function NestedGames() {
    document.title = "Games"
    return (
        <div>
            <h1>Games to play, made with React.</h1>
            <p>
                | <Link to="TicTacToe">Tic-Tac-Toe</Link> |
            </p>
            <Routes>
                <Route path="TicTacToe" element={<TicTacToe />} />
            </Routes>
        </div>
    )
}

export default class NavLink extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        | <Link to={'/'}>Home</Link> |&nbsp;
                        <Link to={'/Login'}>Login</Link> |&nbsp;
                        <Link to={'/Register'}>Sign Up</Link> |&nbsp;
                        <Link to={'/Contact'}>Contact</Link> |&nbsp;
                        <Link to={'/Nested'}>Nested Links</Link> |&nbsp;
                        <Link to={'/Buttons'}>Buttons</Link> |&nbsp;
                        <Link to={'/Tables'}>Tables</Link> |&nbsp;
                        <Link to={'/Games'}>Games</Link> |
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Registration />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/Nested/*" element={<NestedNavLink />} />
                        <Route path="/Buttons/*" element={<NestedButtons />} />
                        <Route path="/Tables/*" element={<NestedTables />} />
                        <Route path="/Games/*" element={<NestedGames />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}