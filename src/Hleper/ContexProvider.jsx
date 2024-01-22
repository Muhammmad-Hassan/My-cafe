import React from "react";
import Context from "./Context";


const UserContexProvider = ({children})=>{
    const [expanded ,setExpanded] = React.useState(true)
    return(
        <Context.Provider value={{expanded , setExpanded}}>
            {children}
        </Context.Provider>
    )
}
export default UserContexProvider;

