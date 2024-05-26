import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import ShowDetails from "./ShowDetails"
import { useState } from "react"
import styles from "./ViewProperties.module.css"
const ViewProperties=()=>{
    const [data,setData]=useState([])
    const [showDetails, setShowDetails] = useState(false);
    const [item, setItem] = useState({});
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    useEffect(() => {
        const fetchUserData=async()=>{
            try{
                
                const response=await axios.get(`${baseUrl}/api/properties`)
                
                setData(response.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUserData();
    },[])

    const showDetailsFn=(item)=>{
        
        setShowDetails(true)
        setItem(item)
    }
    const removeDetailsFn=()=>{
        setShowDetails(false)
    }
    const items = !data ? (
        <div> No data found </div>
    ) : (
        data.map((item) => (
            <div key={item.id} className={styles.card}>
                <h1>{item.title}</h1>
                <p> Price : {item.price}</p>
                <p> Location : {item.location}</p>
                <p> Description : {item.description}</p>
                <p>Bedrooms : {item.bedrooms}</p>
                <p>Bathrooms : {item.bathrooms}</p>
                <button onClick={()=>showDetailsFn(item.sellerId)}>I'm Interested </button>
                
            </div>
        ))
    );
    return (
        <div>
            {items}
            {showDetails && <ShowDetails item={item} onClose={removeDetailsFn}/>}
        </div>
    )
}

export default ViewProperties