import { useNavigate } from 'react-router-dom';
import './Register.css';
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
const navigateToHelloWorldBlog=()=>{
    navigate("/helloworldblog")
}

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
                    <input type="text" placeholder="Firstname Lastname"className='NameInputfield' /> <br />
                    <lable>Email ID</lable><br />
                    <input type="text" placeholder="test@gmail.com" className='EmailInutfield' /> <br />
                    <lable>Password</lable><br />
                    <input type="text" placeholder="Test@123"className='Passwordinputfiled' /> <br />
                    <button className='RegisterButton'onClick={navigateToHelloWorldBlog}>Register</button>





                </div>
            </div>
        </div>
    )
}
export default Register;