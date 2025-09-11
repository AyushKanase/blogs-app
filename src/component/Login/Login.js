import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
function Login(){
const navigate=useNavigate();
const navigateToDashboard=()=>{
    navigate("/")
}
const navigateToRegister=()=>{ 
    navigate("/register")
}
const navigateToLogin=()=>{
    navigate("/login")
}
const[userLogindata,setuserLoginData]=useState({email:"",password:""});
function handelChangeHelloWorldBlog(){
    console.log(userLogindata)
    navigate("/helloworldblog")
}

// const userInformation=axios.get("http://localhost:3001/userInformation", {
//   params: { email, password }
// });







function handelChangeEmail(event){
   let user={...userLogindata};
        user["email"]=event.target.value;
        setuserLoginData(user)
    
    
}
function handelChangePassword(event){
    let user={...userLogindata};
    user["password"]=event.target.value;
    setuserLoginData(user)
}
console.log(handelChangeEmail);
console.log(handelChangePassword);
    return(
<div>
    <div>
                {/* Headersection Start */}
                <div className='headPart'>
                    <div className='HeadSectionLeftside'onClick={navigateToDashboard}>Blogs</div>
                    <div className='HeadRightsideSection'>
                        <div className='HeadRightsideLogin'onClick={navigateToLogin}>Login</div>
                        <div className='HeadRightsideRegister'onClick={navigateToRegister}>Register</div>
                    </div>
                </div>
                {/* Headersection end */}
                <div className='LoginSection'>
                    <div className='BlogHeadingINLoginSection'>Blogs</div>
                    <div className='textUndertheBlogtext'>Publish your passion,your way ...</div>
                    <hr className='SepratingLineBetweenInputFieldandLoginsection'></hr>
                    <div className='textundertheSepratingline'>Login</div>
                   
                    <lable>Email ID</lable><br />
                    <input type="text" placeholder="test@gmail.com" className='EmailIdInutfield' onChange={handelChangeEmail} value={userLogindata.email} /> <br />
                    <lable>Password</lable><br />
                    <input type="text" placeholder="Test@123"className='EnterPassword' onChange={handelChangePassword} value={userLogindata.password}/> <br />
                    <button className='LoginButton'onClick={handelChangeHelloWorldBlog} >Login</button>





                </div>
            </div>
</div>
    )
}
export default Login;