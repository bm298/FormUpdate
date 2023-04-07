import React from "react";
import './formSiteCss.css';
import {BsCheck} from 'react-icons/bs';
import ModalForm from '../formSite/modalForm';

function Nav(){
    return (
        <nav>
            <p className="userReg">User-Registration</p>
        </nav>
    )
}

export function Content(){

    const[openModaL, setOpenModal]= React.useState(false)

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        passwordConfirm: "",
        joinMembership: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {            

            event.preventDefault()
        if (formData.firstName.length > 2 & formData.lastName.length > 0 & formData.email.includes("@") & formData.password===formData.passwordConfirm & formData.passwordConfirm.length>2){
            setOpenModal(prevModal=>!prevModal)
            console.log("modal open")
        }
        else {
            setOpenModal(false)
        }
    }

    function closeModal(){
        setOpenModal(false)

        setFormData({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        passwordConfirm: "",
        joinMembership: false
        })
    }

    return (
        <div className="spanAll">
            <div className="circleOverlay">
                <div className="signUp">
                    <h1>Sign up today</h1>
                    <p>Enter Details below to continue!</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>        
                <div className="spanAllContainer">
                <div className="registerName">
                   <h2 className="registerNameh2"> {formData.firstName} {formData.lastName} </h2>
                </div>
    
                    {openModaL && <ModalForm open= {openModaL} close={closeModal} title={formData.firstName}/>} 
                
                <div className="contentEl">
                    <div className="eachBox"><input type="firstName" placeholder='First Name' className='formInputs' name="firstName" onChange={handleChange} value={formData.firstName}></input>{!openModaL &&<BsCheck className={formData.firstName.length > 2 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="lastName" placeholder='Last Name' className='formInputs' name="lastName" onChange={handleChange} value={formData.lastName}></input>{!openModaL && <BsCheck className={formData.lastName.length > 0 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="email" placeholder='Email' className='formInputs' name="email" onChange={handleChange} value={formData.email}></input>{!openModaL && <BsCheck className={formData.email.includes("@") ? "greenTick" : "blackTick"}/>}</div>
                    <div className="eachBox"><input type="password" placeholder='Password' className='formInputs' name="password" onChange={handleChange} value={formData.password}></input> {!openModaL && <BsCheck className={formData.password.length > 2 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="password" placeholder='ConfirmPassword' className='formInputs' name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}></input>{!openModaL && <BsCheck className={formData.password===formData.passwordConfirm && formData.passwordConfirm.length>2 ? "greenTick" : "blackTick" }/>}</div>
                </div>
                <div>
                    {formData.password!==formData.passwordConfirm && formData.passwordConfirm.length>2 && <p className="pwordError">*Passwords Do Not Match</p>} 
                </div>
                <div className="formMarketing">
                    <input
                        id="joinMembership"
                        type="checkbox"
                        name="joinMembership"
                        onChange={handleChange}
                        checked={formData.joinMembership}
                    />
                    <label htmlFor="joinMembership">I want to receive exclusive content</label>
                </div>
{}
                {formData.firstName.length > 2 && formData.lastName.length > 0 && formData.email.includes("@") && formData.password===formData.passwordConfirm && formData.passwordConfirm.length>2 && <button className="submitBtn">Sign Up</button>}
                </div>
            </form>
        </div>

    )
}

function Footer (){
    return(
        <div>
           <h3> Copyright © 2022. All right reserved Bilal Musa. </h3>
        </div>
    )
}
export default function formSite() {

    return (
    <div>
        <div><Nav /></div>
            <div className="container">
            <Content />
            </div>
        <div className="Footer"> <Footer /> </div>
    </div>  
    );
  }