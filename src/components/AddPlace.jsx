import React from "react";
import styles from './AddPlace.module.css'
import { useState } from "react";
import axios from "axios";

const AddPlace = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [place, setPlace] = useState("");
    const [location, setLocation] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");

    const SubmitHandler = async() => {
        const data = {
            title,
            description,
            price,
            place,
            location,
            bedrooms,
            bathrooms
        }
        try{

            const response =await axios.post("http://localhost:5000/api/properties", data)
        }
        catch(err){
            console.log(err);
        }

    }
    return (

        <form onSubmit={SubmitHandler} className={styles.page}>
            <label for="title">Property Title:</label>
            <input type="text" id="title" name="title"  className={styles.input} required onChange={(e) => setTitle(e.target.value)}/>

            <label for="description">Description:</label>
            <textarea id="description" name="description" className={styles.input} required onChange={(e) => setDescription(e.target.value)}></textarea>

            <label for="price">Price:</label>
            <input type="number" id="price" name="price" className={styles.input} required  onChange={(e) => setPrice(e.target.value)}/>

            <label for="place">Place:</label>
            <input type="text" id="place" name="place" className={styles.input} required  onChange={(e) => setPlace(e.target.value)}/>

            <label for="address">Location:</label>
            <input type="text" id="address" name="address"  className={styles.input} required  onChange={(e) => setLocation(e.target.value)}/>

            <label for="bedrooms">Number of Bedrooms:</label>
            <input type="number" id="bedrooms" name="bedrooms"  className={styles.input} required  onChange={(e) => setBedrooms(e.target.value)}/>

            <label for="bathrooms">Number of Bathrooms:</label>
            <input type="number" id="bathrooms" name="bathrooms"  className={styles.input} required  onChange={(e) => setBathrooms(e.target.value)}></input>
        </form>
    )
};

export default AddPlace