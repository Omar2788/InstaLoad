import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
     useEffect(() => {

       
        const unsub = projectFirestore.collection(collection)
        .where('userName','==','omar')
        .orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            let documents = [] ;
            console.log(snap)
            snap.forEach(doc =>{
               documents.push({...doc.data(),id: doc.id})
            });
            setDocs(documents) ;    
        });

        return () => unsub(); 
    },[collection] )
    
    return{ docs };

}

export default useFirestore; 