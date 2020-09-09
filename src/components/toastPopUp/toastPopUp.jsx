import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ToastPopUp extends Component {
    render() {
        const notify = () => toast.info("Wow so easy !");

        return ( 
            <>
                <button onClick={notify}>Notify !</button>
                <ToastContainer />
            </>
         );
    }
}

export default ToastPopUp;