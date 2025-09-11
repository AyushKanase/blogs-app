import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';
function Register() {
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
// const navigateToHelloWorldBlog=()=>{
//     navigate("/helloworldblog")
// }
const[userRegisterdata,setuserRegisterData]=useState({name:"",email:"",password:""});
function handelChangeRegister(){
    console.log(userRegisterdata)
    navigate("/login")
}

function handelChangeRegister(){
    axios.post('http://localhost:3001/user',userRegisterdata)
    .then(response=>{
        alert("Registration Successfully")
        navigate("/login")
    })
    .catch(error=>{
        console.error("Registration Failedz",error);
    });
}
function handelChangeName(event){
   let user={...userRegisterdata};
        user["name"]=event.target.value;
        setuserRegisterData(user)
    
    
}
function handelChangeEmail(event){
    let user={...userRegisterdata};
    user["email"]=event.target.value;
    setuserRegisterData(user)
}
function handelChangePassword(event){
    let user={...userRegisterdata};
    user["password"]=event.target.value;
    setuserRegisterData(user)
}

console.log(handelChangeName);
console.log(handelChangeEmail);
console.log(handelChangePassword);
    return (
        <div>
            <div>
                {/* Headersection Start */}
                <div className='headingPart'>
                    <div className='HeadingSectionLeftside'onClick={navigateToDashboard}>Blogs</div>
                    <div className='HeadingRightsideSection'>
                        <div className='HeadingRightsideLogin'onClick={navigateToLogin}>Login</div>
                        <div className='HeadingRightsideRegister'onClick={navigateToRegister}>Register</div>
                    </div>
                </div>
                {/* Headersection end */}
                <div className='RegisterSection'>
                    <div className='BlogHeadingINRegistretionSection'>Blogs</div>
                    <div className='textUndertheBlogtitle'>Publish your passion,your way ...</div>
                    <hr className='SepratingLineBetweenInputFieldandUpperheading'></hr>
                    <div className='TitleundertheSepratingline'>Register</div>
                    <label>Name</label><br />
                    <input type="text" placeholder="Firstname Lastname"className='NameInputfield'onChange={handelChangeName} value={userRegisterdata.name}/> <br />
                    <lable>Email ID</lable><br />
                    <input type="text" placeholder="test@gmail.com" className='EmailInutfield' onChange={handelChangeEmail} value={userRegisterdata.email}/> <br />
                    <lable>Password</lable><br />
                    <input type="text" placeholder="Test@123"className='Passwordinputfiled' onChange={handelChangePassword} value={userRegisterdata.password}/> <br />
                    <button className='RegisterButton'onClick={handelChangeRegister}>Register</button>





                </div>
            </div>
        </div>
    )
}
export default Register;