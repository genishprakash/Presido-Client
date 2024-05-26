import React from "react";
import styles from './Login.module.css'
import { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const navigate=useNavigate()
    const submitHandler = async(event) => {
        event.preventDefault();
        const data={
            email,
            password
        }
        console.log(data)
        try{
            const response= await axios.post(`${baseUrl}/api/users/login`, data)

            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("id", response.data.id);
            console.log("Login successful, token stored:", response.data);

            navigate("/")
        }
        catch(error){
            console.error(error.message);
        }

    }
    return (<form className={styles.page} onSubmit={submitHandler}>
        <h2 className={styles.heading}>Login</h2>
        <p>Email</p>
        <input type="email" placeholder="Enter Email" className={styles.input} onChange={(e) => setEmail(e.target.value)}/>
        <p>Password</p>
        <input type="password" placeholder="Enter Password" className={styles.input} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Submit" className={styles.submit}/>
    </form>);
};

export default Login;