import React, { useEffect } from "react";
import { useState } from "react";

const useOnline=()=>{
    const[isOnline,setIsOnline]= useState(true);

    //always clean the cache. Here every time a new event listener created again and again . we need to remoe the data.
    // for some optimisation we need to remove this listeners.
    

    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }
    
        const handleOffline=()=>{
            setIsOnline(false);
        }
        window.addEventListener('online',handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);
    
    return isOnline;
}

export default useOnline;