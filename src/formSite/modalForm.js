import React from "react";
import {BsPatchCheck} from 'react-icons/bs';
import './modalFormCss.css';


export default function modalForm(props) {

    if (!props.open){
        return null
    }
    else{
        return (
            <div className="modalContainer">
            <div className="closeBtn"><span className="closeBtnSpan" onClick={props.close}>x</span></div>
                <div className="checkContainer"><BsPatchCheck className="BsPatchCheck" /></div>
            <div className="contentModalContainer">
                <h2 id="h2Content">Thanks! You're all signed up {props.title}!</h2>
                <p id="paraContent">Check your Inbox! A confirmation email is on its way...</p>
            </div>
            </div>
            );
    }
  }