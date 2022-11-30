import React from "react";
import './formSiteCss.css';
import face2form from '../formSite/face2form.jfif'
import { FaGlobeAmericas } from 'react-icons/fa';
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
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        passwordConfirm: "",
        joinMembership: false
    })

    function handleChange(event) {
        console.log (event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const[openModaL, setOpenModal]= React.useState(false)

    function handleSubmit(event) {            

            event.preventDefault()
        if (formData.firstName.length > 2 & formData.lastName.length > 2 & formData.email.includes("@") & formData.password===formData.passwordConfirm & formData.passwordConfirm.length>2){
            setOpenModal(prevModal=>!prevModal)
            console.log("success")
        }
        else {
            console.log("not complete")
        }
    }
    console.log(openModaL)

    function closeModal(){
        setOpenModal(false)
    }

    return (
        <div className="spanAll">
            <form onSubmit={handleSubmit}>
                <div className="profileImage">
                    <img src={face2form} className='memeImg' /> 
                </div>
                <div className="spanAllContainer">
                <div className="registerName">
                   <h2 className="registerNameh2"> {formData.firstName} {formData.lastName} </h2>
                </div>
                        {openModaL && <ModalForm open= {openModaL} close={closeModal} title={formData.firstName}/>} 
            
                <div className="contentEl">
                    <div className="eachBox"><input type="firstName" placeholder='First Name' className='formInputs' name="firstName" onChange={handleChange} value={formData.firstName}></input>{!openModaL &&<BsCheck className={formData.firstName.length > 2 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="lastName" placeholder='Last Name' className='formInputs' name="lastName" onChange={handleChange} value={formData.lastName}></input>{!openModaL && <BsCheck className={formData.lastName.length > 2 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="email" placeholder='Email' className='formInputs' name="email" onChange={handleChange} value={formData.email}></input>{!openModaL && <BsCheck className={formData.email.includes("@") ? "greenTick" : "blackTick"}/>}</div>
                    <div className="eachBox"><input type="password" placeholder='Password' className='formInputs' name="password" onChange={handleChange} value={formData.password}></input> {!openModaL && <BsCheck className={formData.password.length > 2 ? "greenTick" : "blackTick" }/>}</div>
                    <div className="eachBox"><input type="password" placeholder='ConfirmPassword' className='formInputs' name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}></input>{!openModaL && <BsCheck className={formData.password===formData.passwordConfirm && formData.passwordConfirm.length>2 ? "greenTick" : "blackTick" }/>}</div>
                </div>
    {formData.password!==formData.passwordConfirm && formData.passwordConfirm.length>2 && <p className="pwordError">*Passwords Do Not Match</p>} 
                <div className="genderId">
                    <label htmlFor="gender" className="gender">Gender</label>
                    <select className="genderSelect">
                    {/* onChange= { (e) =>  setFormData(prevFormData => {
                        return ({...prevFormData})
                                }
                            )
                        } */}
                    <option value="">--Choose--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>

                {/* How to use minlength validator to validate password lenfth etc? */}
                <div className="form--marketing">
                    <input
                        id="joinMembership"
                        type="checkbox"
                        name="joinMembership"
                        onChange={handleChange}
                        checked={formData.joinMembership}
                    />
                    <label htmlFor="joinMembership">I want to sign up to paid Membership</label>
                </div>
                {formData.password===formData.passwordConfirm && formData.passwordConfirm.length>2 && <button className="submitBtn">Submit</button>}
                </div>
            </form>
        </div>


        // <div className="spanAll">
        //     <div className="box1">
        //         <h2>hi</h2>
        //     </div>

        //     <div className="box2">
        //     <h1>hello baby 2</h1>
        //     </div>

        //     <div className="box3">
        //     <h1>hello baby 3</h1>
        //     </div>

        //     <div className="box4">
        //     <h1>hello baby 4</h1>
        //     </div>
        // </div>
       
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