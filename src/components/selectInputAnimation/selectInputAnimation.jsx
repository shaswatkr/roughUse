import React, { Component } from 'react';
import "./selectInputAnimation.css";

class SelectInputAnimation extends Component {
    componentDidMount() {
        // Change option selected
        const label = document.querySelector('.dropdown__filter-selected')
        const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

        options.forEach((option) => {
            option.addEventListener('click', () => {
                label.textContent = option.textContent
            })
        })

        // Close dropdown onclick outside
        document.addEventListener('click', (e) => {
            const toggle = document.querySelector('.dropdown__switch')
            const element = e.target

            if (element === toggle) return;

            const isDropdownChild = element.closest('.dropdown__filter')

            if (!isDropdownChild) {
                toggle.checked = false
            }
        })
    }

    render() {
        return (
            <>
                <link href="https://fonts.googleapis.com/css?family=Lato:300&display=swap" rel="stylesheet" />

                <div class="dropdown">
                    <input type="checkbox" class="dropdown__switch" id="filter-switch" hidden />
                    <label for="filter-switch" class="dropdown__options-filter">
                        <ul class="dropdown__filter" role="listbox" tabindex="-1">
                            <li class="dropdown__filter-selected" ariaSelected="true">
                                Default option
			                </li>
                            <li>
                                <ul class="dropdown__select">
                                    <li class="dropdown__select-option" role="option">
                                        Option 1
					                </li>
                                    <li class="dropdown__select-option" role="option">
                                        Option 2
					                </li>
                                    <li class="dropdown__select-option" role="option">
                                        Option 3
					                </li>
                                    <li class="dropdown__select-option" role="option">
                                        Option 4
					                </li>
                                    <li class="dropdown__select-option" role="option">
                                        Option 5
					                </li>
                                </ul>
                            </li>
                        </ul>
                    </label>
                </div >
            </>
        );
    }
}

export default SelectInputAnimation;