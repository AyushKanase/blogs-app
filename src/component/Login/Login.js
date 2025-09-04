import './Login.css';
function Login(){
    return(
<div>
    <div>
                {/* Headersection Start */}
                <div className='headPart'>
                    <div className='HeadSectionLeftside'>Blogs</div>
                    <div className='HeadRightsideSection'>
                        <div className='HeadRightsideLogin'>Login</div>
                        <div className='HeadRightsideRegister'>Register</div>
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
                    <button className='LoginButton'>Login</button>





                </div>
            </div>
</div>
    )
}
export default Login;