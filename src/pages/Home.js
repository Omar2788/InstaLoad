import React,{useState} from "react"
import ImageGrid from "../comps/ImageGrid"
import Titlee from "../comps/Titlee"
import UploadForm from "../comps/UploadForm"
import Modal from "../comps/Modal"
import { Redirect } from "react-router"
import firebase from "firebase"
function Home(userName){
    const [selectedImg, setSelectedImg] = useState(null);
    var user=1;/*auth.currentUser;*/
    
        if (user) {
                return (
                    <div className="home">
                    
                    <Titlee/>
                    <UploadForm userName={userName}/>
                    <ImageGrid setSelectedImg={setSelectedImg}/>
                    { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
                    </div>
                     )
            }else return <Redirect to="/"/> 

}
export default Home