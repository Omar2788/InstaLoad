import React,{useState} from "react"
import ImageGrid from "../comps/ImageGrid"
import Titlee from "../comps/Titlee"
import UploadForm from "../comps/UploadForm"
import Modal from "../comps/Modal"

function Home(){
    const [selectedImg, setSelectedImg] = useState(null);

return (
    <div className="home">
         <Titlee/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
     
    </div>
)
}

export default Home