import React, { Component } from 'react';
import "./darkNightUIMode.css";

class DarkNightUIMode extends Component {
    render() {
        return (
            <>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Signika:wght@400&display=swap" rel="stylesheet" />
                <div>
                    <input type="checkbox" id="btn" />
                    <div id="main">
                        <h1 id="first-line">I'M</h1>
                        <h1 id="second-line">BR<span id="mid">OK</span>EN</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default DarkNightUIMode;