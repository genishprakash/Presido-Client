import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import MyProperties from "./MyProperties"
import AddPlace from "./AddPlace"
import ViewProperties from "./ViewProperties"
const Home=()=>{
    const [visibility, setVisibility] = useState(false)
    const navigate=useNavigate()
    const baseUrl=useSelector((state)=>state.baseUrl.baseUrl)
    useEffect(() => {
        const auth=async()=>{
            try{
                const response=await axios.get(`${baseUrl}/api/users/current`,{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                setVisibility(true)
            }
            catch(error){
                setVisibility(false)
                navigate("/login")
            }
        }
        auth()
    },[])
    const [viewModal, setViewModal] = useState(false);
    const [viewProperty, setViewProperty] = useState(false);
    const SellerHandler=()=>{
        setViewModal(true)
    }
    const buyerHandler=()=>{
        setViewProperty(true)
    }
    return (
        <>
            {visibility ? <div>
                <h1>Home</h1>
                <button onClick={SellerHandler}>Rent a property</button>
                {viewModal && <AddPlace></AddPlace>}
                <button onClick={buyerHandler}>View property</button>

                <MyProperties></MyProperties>
                {viewProperty && <ViewProperties></ViewProperties>}
            </div> : null}
        </>
        
    )  
}

export default Home