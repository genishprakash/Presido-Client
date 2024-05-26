import React from "react";
import Model from "../components/Modal";
const ShowDetails=(props)=>{
    
    return(
        <Model onClose={props.onClose}>
            <h1>Name : {props.item.username}</h1>
            <h1>Email : {props.item.email}</h1>
            <h1>Phone No : {props.item.phoneno}</h1>
        </Model>
    )
}

export default ShowDetails