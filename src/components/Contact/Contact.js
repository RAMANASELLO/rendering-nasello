import React, {useContext, useEffect} from "react"
import {db} from "../../utils/firebase"
import {doc, getDoc, getFirestore} from "firebase/firestore"


export const Contact = () => {
 
    useEffect(() =>{
        const getData = async() =>{
            //creamos la referencia
            const query=doc(db, "items", "sIVOTTIb9zpEaRQSUBWT")
            //solicitud
            const response=await getDoc(query)
            console.log("id", response.id)
            console. log("data", response.data())
            const newProduct={
                ...response.data(),
                id:response.id
        }
        console.log(newProduct)
    }
        getData();
    },[])
    return(
        <div>Contact</div>
    )
}

export default Contact