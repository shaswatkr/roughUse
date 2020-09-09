import React, { Component } from 'react';
import "./buttonHoverOpen.css";

class ButtonHoverOpen extends Component {
    render() {
        return (
            <button className="noselect">
                <div className="bg"></div>
            </button>
        );
    }
}

export default ButtonHoverOpen;