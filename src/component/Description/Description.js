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
                            <div><input type='text' placeholder='Title' className='DescriptionTitle' /></div>
                            <hr className='DescriptionSepratingLine' />
                            <div><textarea placeholder="Description" className='DescriptionTextArea'></textarea></div><br></br>
                            <button className='DescriptionCancelButton'><strong>Cancel</strong></button>
                            <button className='DescriptionSaveButton'><strong>Save</strong></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description;