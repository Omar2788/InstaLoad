import React from 'react' ;
import { motion } from 'framer-motion';
import './ButtonDelete.css' ;
import { projectStorage} from "../firebase/config";
import useStorage from '../hooks/useStorage';
import { useState, useEffect } from "react";
import { doc, deleteDoc } from "firebase/firestore";
const  Modal = ({ selectedImg,setSelectedImg }) => {
const handleClick = (e) => {
  
    if (e.target.classList.contains('backdrop')){
    setSelectedImg(null) ;

    }
    
}

/*
const deleteImage = (selectedImg) => {
  var fileUrl = selectedImg.url ; 
  var fileRef = storage.refFromURL(fileUrl);
  
console.log("File in database before delete exists : " 
        + fileRef.exists())
  
fileRef.delete().then(function () {
  
    // File deleted successfully
    console.log("File Deleted")
}).catch(function (error) {
    
});
  
console.log("File in database after delete exists : "
        + fileRef.exists())


  //this.props.deleteImage(this.props.selectedImg);
 // console.log(doc.url) ; 
 // storageRef.delete();
 // selectedImg.url.remove() ; 
   /* useStorage.delete().then(()=>{
    selectedImg.remove() ; 
  });*/

return (
  
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />        
      <button class='butDelete' >delete</button> 

    </motion.div>
  )
}

export default Modal;