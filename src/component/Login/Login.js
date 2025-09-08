import { useNavigate } from 'react-router-dom';
import './Login.css';
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
                    <input type="text" placeholder="test@gmail.com" className='EmailIdInutfield' /> <br />
                    <lable>Password</lable><br />
                    <input type="text" placeholder="Test@123"className='EnterPassword' /> <br />
                    <button className='LoginButton'onClick={navigateToRegister} >Login</button>





                </div>
            </div>
</div>
    )
}
export default Login;