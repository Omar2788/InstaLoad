import React from 'react' ;
import { motion } from 'framer-motion';
import './ButtonDelete.css' ;

import { projectFirestore } from "../firebase/config";


const  Modal = ({ selectedImg,setSelectedImg }) => {

  const deleteImage=()=>{
  var image_query = projectFirestore.collection('images').where('url','==',selectedImg);
  image_query.get().then((snap)=>{
      snap.forEach((doc)=>{
          doc.ref.delete();
      })
  })

  setSelectedImg(null) ;
}

const handleClick = (e) => {
  
    if (e.target.classList.contains('backdrop')){
    setSelectedImg(null) ;

    }
    
}

return (
  
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />        
      <button className='butDelete' onClick={deleteImage}>delete</button> 

    </motion.div>
  )
}

export default Modal;