import React from "react";
import styles from './Signin.module.css'
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();

    const logInHandler=()=>{
        navigate("/login")
    }

    const signUpHandler=()=>{
        navigate("/signup")
    }
    return (
        <div className={styles.container}>
            <button onClick={logInHandler} className={styles.button}>Login</button>
            <button onClick={signUpHandler}  className={styles.button}>Signup</button>
        </div>
    )
};  

export default Signin