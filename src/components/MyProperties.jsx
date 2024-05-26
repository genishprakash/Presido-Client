import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import UpdateProperty from "./UpdateProperty";
import styles from "./MyProperties.module.css"
const MyProperties = () => {
    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState({});
    const [data,setData]=useState([])
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    const [rerender,setRerender]=useState(false)
    useEffect(() => {
        const fetchUserData=async()=>{
            try{
                const id=localStorage.getItem("id")
                const response= await axios.get(`${baseUrl}/api/properties/${id}`)
                setData(response.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUserData();
    },[rerender])
    const updateProperty=(property,id)=>{
        try{
            axios.put(`${baseUrl}/api/properties/${id}`,property)
            setRerender(()=>!rerender)
        }
        catch(err){
            console.log(err);
        }
    }
    const DeleteHandler=(id,event)=>{
        
        try{
            axios.delete(`${baseUrl}/api/properties/${id}`)
        }
        catch(err){
            console.log(err);
        }
        setRerender(()=>!rerender)

    }
    const UpdateHandler=(item)=>{
        
        setShowModal(true)
        setItem(item)
    }
    const items = !data ? (
        <div> No data found </div>
    ) : (
        data.map((item) => (
            <div key={item._id} className={styles.card}>
                <h1>Title : {item.title}</h1>
                <p> Price : {item.price}</p>
                <p> Location : {item.location}</p>
                <p> Description : {item.description}</p>
                <p>Bedrooms : {item.bedrooms}</p>
                <p>Bathrooms : {item.bathrooms}</p>
                <p>Likes : {item.likes}</p>
                <button onClick={()=>UpdateHandler(item)}>Edit</button>
                <button onClick={()=>DeleteHandler(item._id) }>Delete</button>
            </div>
        ))
    );
    
    return (
        <div>
            {items}
            {showModal && <UpdateProperty onClose={() => setShowModal(false)} property={item} onUpdate={updateProperty} />} 
        </div>)
    ;
};

export default MyProperties