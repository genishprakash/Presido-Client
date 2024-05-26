import React from "react";
import styles from './AddPlace.module.css'
import { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux"

const AddPlace = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    
    const [location, setLocation] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    const SubmitHandler = async(event) => {

        event.preventDefault();
        const data = {
            sellerId: localStorage.getItem("id"),
            title,
            description,
            price,
            location,
            bedrooms,
            bathrooms
        }
        try{
            const response =await axios.post(`${baseUrl}/api/properties`, data)
            console.log("Successfully added property", response.data);
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
            setBedrooms("");
            setBathrooms("");
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        
            <form onSubmit={SubmitHandler} className={styles.page}>
                <label htmlFor="title">Property Title:</label>
                <input type="text" id="title" name="title"  className={styles.input} required onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" className={styles.input} required onChange={(e) => setDescription(e.target.value)}></textarea>

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" className={styles.input} required  onChange={(e) => setPrice(e.target.value)}/>

            
                <label htmlFor="address">Location:</label>
                <input type="text" id="address" name="address"  className={styles.input} required  onChange={(e) => setLocation(e.target.value)}/>

                <label htmlFor="bedrooms">Number of Bedrooms:</label>
                <input type="number" id="bedrooms" name="bedrooms"  className={styles.input} required  onChange={(e) => setBedrooms(e.target.value)}/>

                <label htmlFor="bathrooms">Number of Bathrooms:</label>
                <input type="number" id="bathrooms" name="bathrooms"  className={styles.input} required  onChange={(e) => setBathrooms(e.target.value)}></input>
                <div className={styles.buttons}>
                    <input type="submit" value="Submit" className={styles.btn}/>
                </div>
            </form>
        
    )
};

export default AddPlace