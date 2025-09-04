import './Dashboard.css';
function Dashboard() {
    return (
        <div>
            <div>
                <div className='headerSection'>
                    <div className='HeaderSectionLeftside'>Blogs</div>
                    <div className='HeaderRightsideSection'>
                        <div className='HeaderRightsideLogin'>Login</div>
                        <div className='HeaderRightsideRegister'>Register</div>
                    </div>
                   
                </div>
                {/* HeaderSection End */}

                <div className='bodySection'>
                <div className='blogTitle'>Blogs !</div>
                <div className=''>publish your passions, in your way ...</div>
                <hr className='SepratingLine'></hr>
                <div className='Buttons'>
                    <button className='loginButton'>Login</button>
                    <button className='registerButton'>Register</button>

                </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;