import React, { Component } from 'react';
import "./searchBarAnimation.css";

class SearchBarAnimation extends Component {
    state = {}
    render() {
        return (
            <form>
                <label for="search">Search</label>
                <input id="search" type="search" pattern=".*\S.*" required />
                <span class="caret"></span>
            </form>
        );
    }
}

export default SearchBarAnimation;