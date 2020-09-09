import React, { Component } from 'react';
import "./neumorphicRadioBtn.css";

class NeumorphicRadioBtn extends Component {
    setPaymentMode = (mode) => {
        var container = document.querySelector('.container');
        if (mode === 'cash') {
            container.classList.add('cash-selected');
            container.classList.remove('card-selected');
        } else {
            container.classList.add('card-selected');
            container.classList.remove('cash-selected');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <h4 className="flex-grow mb-4">Please select your mode of payment</h4>
                <div className="container flex-grow">
                    <input type="radio" id="cash" value="cash" name="payement-mode" onChange={() => this.setPaymentMode('cash')} />
                    <label htmlFor="cash">
                        <span>
                            <i className="fa fa-money-bill mr-1"></i> Cash</span>
                    </label>

                    <input type="radio" name="payement-mode" id="card" value="card" onChange={() => this.setPaymentMode('card')} />
                    <label htmlFor="card">
                        <span>
                            <i className="fa fa-money-check mr-1"></i> Credit Card</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default NeumorphicRadioBtn;