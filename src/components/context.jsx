import { createContext, useState } from "react";

export const Cardcontext=createContext()

export const Contextprovider=(props)=>{
    const [item,setItem]=useState([])
    return(
        <Cardcontext.Provider value={{itme,setItem}}>
            {props.children}
        </Cardcontext.Provider>
    )
}