import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MyProperties from "./MyProperties"
import AddPlace from "./AddPlace"
import ViewProperties from "./ViewProperties"
import styles from './Home.module.css'
const Home=()=>{
    const [visibility, setVisibility] = useState(false)
    const navigate=useNavigate()
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    useEffect(() => {
        const auth=async()=>{
            try{
                if(!localStorage.getItem("token")) {
                    return navigate("/signin")
                }
                const response=await axios.get(`${baseUrl}/api/users/current`,{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                
                setVisibility(true)
            }
            catch(error){
                navigate("/signin")
                setVisibility(false)
            }
        }
        auth()
    },[])
    const [viewModal, setViewModal] = useState(false);
    const [viewProperty, setViewProperty] = useState(false);
    const [myProperties, setMyProperties] = useState(false);
    const SellerHandlerTrue=()=>{
        setViewModal(true)
        setMyProperties(false)
        setViewProperty(false)
    }
    
    const viewPropertyTrue=()=>{
        setViewProperty(true)
        setMyProperties(false)
        setViewModal(false)
    }
    
    const myPropertiesTrue=()=>{
        setMyProperties(true)
        setViewProperty(false)
        setViewModal(false)
    }
    
    
    return (
        <div className={styles.container}>
            {visibility ? <div className={styles.container}>
                <h1 className={styles.heading}>Home</h1>
                <div className={styles.buttons}>
                    <button onClick={SellerHandlerTrue} className={styles.button}>Rent property</button>
                    
                    <button onClick={viewPropertyTrue} className={styles.button}>View property</button>
                    
                    <button onClick={myPropertiesTrue} className={styles.button}>My properties</button>
                    
                </div>
                {viewModal && <AddPlace ></AddPlace>}
                {viewProperty && <ViewProperties></ViewProperties>}
                {myProperties && <MyProperties ></MyProperties>}
                   
            </div> : null}
        </div>
        
    )  
}

export default Home