import './Register.css';
function Register() {
    return (
        <div>
            <div>
                {/* Headersection Start */}
                <div className='headingPart'>
                    <div className='HeadingSectionLeftside'>Blogs</div>
                    <div className='HeadingRightsideSection'>
                        <div className='HeadingRightsideLogin'>Login</div>
                        <div className='HeadingRightsideRegister'>Register</div>
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
                    <button className='RegisterButton'>Register</button>





                </div>
            </div>
        </div>
    )
}
export default Register;