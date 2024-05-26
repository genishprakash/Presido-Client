import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const MyProperties = () => {

    const [data,setData]=useState([])
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    useEffect(() => {
        const fetchUserData=()=>{
            try{
                const id=localStorage.getItem("id")
               // const response=axios.get(`${baseUrl}/api/properties/${id}`)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUserData();
    },[])
    return <div>MyProperties</div>;
};

export default MyProperties