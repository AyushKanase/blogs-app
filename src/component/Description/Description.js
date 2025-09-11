import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Description.css';

function Description() {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    }

    const navigateToRegister = () => {
        navigate("/register")
    }
    const navigateToDashboard = () => {
        navigate("/")
    }
   const[userDescriptiondata,setuserDescriptionData]=useState({Title:"",Description:""});
   function handelChangeDescription (){
       console.log(userDescriptiondata)
       navigate("/description")
   }
   function handelChangeDescription(){
    axios.post('http://localhost:3001/blog',userDescriptiondata)
    .then(response=>{
        alert("Title updated Successfully")
        navigate("/description ")
    })
    .catch(error=>{
        console.error("Title updated Failed",error);
    });
}






   function handelChangeTitle(event){
      let user={...userDescriptiondata};
           user["Title"]=event.target.value;
           setuserDescriptionData(user)
       
       
   }
   function handelChangeDescriptionTextArea(event){
       let user={...userDescriptiondata};
       user["Description"]=event.target.value;
       setuserDescriptionData(user)
   }
    return (
        <div>
            <div>
                <div>
                    {/* header section start  */}
                    <div className='Descriptionheadpartation'>
                        <div className='DescriptionHeadSecLeftside' onClick={navigateToDashboard}>Blogs</div>
                        <div className='DescriptionHeadRightsideSec'>
                            <span className='DescriptionName'><i class="fa fa-user userIcon" aria-hidden="true"></i>
                                Ishwari Kanase</span>
                            <i class="fa fa-arrow-circle-o-right rightArrow" aria-hidden="true" ></i>

                            <span className='DescriptionLogout' onClick={navigateToLogin}>Logout</span>
                        </div>
                    </div>
                    {/* header section end  */}
                    <div className='DescriptionBodysection'>

                        <div className='Textarea'>
                            <div><input type='text' placeholder='Title' className='DescriptionTitle'onChange={handelChangeTitle} value={userDescriptiondata.Title} /></div>
                            <hr className='DescriptionSepratingLine' />
                            <div><textarea placeholder="Description" className='DescriptionTextArea' onChange={handelChangeDescriptionTextArea} value={userDescriptiondata.Description}></textarea></div><br></br>
                            <button className='DescriptionCancelButton'><strong>Cancel</strong></button>
                            <button className='DescriptionSaveButton' onClick={handelChangeDescription}><strong>Save</strong></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description;