import React from "react";
import {BsPatchCheck} from 'react-icons/bs';
import gitSheet from '../formSite/git-sheet.pdf'
import './modalFormCss.css';


export default function modalForm(props) {

    const capitalizedName = props.title.charAt(0).toUpperCase() + props.title.slice(1)

    if (!props.open){
        return null
    }
    else{
        return (
            <div className="modalContainer">
            <div className="closeBtn"><span className="closeBtnSpan" onClick={props.close}>✖</span></div>
                <div className="checkContainer"><BsPatchCheck className="BsPatchCheck" /></div>
            <div className="contentModalContainer">
                <h2 id="h2Content">Thanks! You're all signed up {capitalizedName}!</h2>
                <p id="paraContent">Click below to claim your free download!</p>
                <a href={gitSheet} download="gitSheet" className="downloadBtn">Download</a>
            </div>
            </div>
            );
    }
  }