import React from "react";
import styles from './SignUp.module.css'
import { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const  submitHandler =async (event) => {
        event.preventDefault();
        const data = {
            username: firstName + " " + lastName,
            email,
            phoneno: phoneNo,
            password,
            
        }
        
        try{

            const response= await axios.post(`${baseUrl}/api/users/register`, data)
            console.log(response)
            navigate("/login");
        }   
        catch{
            console.error(error.message);
        }

    }
    return (
        <form className={styles.page} onSubmit={submitHandler}>
            <h2 className={styles.heading}>Sign Up</h2>
            <p>First Name</p>
            <input type="text" placeholder="Enter First Name" className={styles.input} onChange={(e) => setFirstName(e.target.value)} />
            <p>Last Name</p>
            <input type="text" placeholder="Enter Last Name" className={styles.input} onChange={(e) => setLastName(e.target.value)} />
            <p>Email</p>
            <input type="email" placeholder="Enter Email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
            <p>Phone No</p>
            <input type="number" placeholder="Enter Phone No" className={styles.input} onChange={(e) => setPhoneNo(e.target.value)} />
            <p>Password</p>
            <input type="password" placeholder="Enter Password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
            
            <input type="submit" value="Submit" className={styles.submit} />
            
        </form>
    );
};

export default Signup