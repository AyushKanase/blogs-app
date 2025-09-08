import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
function Dashboard() {
const navigate=useNavigate();
const navigateToLogin=()=>{
    navigate("/login");
}

const navigateToRegister=()=>{
navigate("/register")
}
    return (
        <div>
            <div>
                <div className='headerSection'>
                    <div className='HeaderSectionLeftside'>Blogs</div>
                    <div className='HeaderRightsideSection'>
                        <div className='HeaderRightsideLogin'onClick={navigateToLogin} >Login</div>
                        <div className='HeaderRightsideRegister'onClick={navigateToRegister}>Register</div>
                    </div>
                   
                </div>
                {/* HeaderSection End */}

                <div className='bodySection'>
                <div className='blogTitle'>Blogs !</div>
                <div className=''>publish your passions, in your way ...</div>
                <hr className='SepratingLine'></hr>
                <div className='Buttons'>
                    <button className='loginButton' onClick={navigateToLogin}>Login</button>
                    <button className='registerButton'onClick={navigateToRegister}>Register</button>

                </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;