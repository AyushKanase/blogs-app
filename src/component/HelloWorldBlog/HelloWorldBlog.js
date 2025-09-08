import { useNavigate } from 'react-router-dom';
import './HelloWorldBlog.css';
function HelloWorldBlog() {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate("/")
    }
    const navigateToRegister = () => {
        navigate("/register")
    }
    const navigateToLogin = () => {
        navigate("/login")
    }
    const navigateToDescription = () => {
        navigate("/description")
    }



    return (
        <div>
            <div>
                {/* header section start  */}
                <div className='headpartation'>
                    <div className='HeadSecLeftside' onClick={navigateToDashboard}>Blogs</div>
                    <div className='HeadRightsideSec'>
                        <span className='Name'><i class="fa fa-user headerUserIcons" aria-hidden="true"></i>
                            Ishwari Kanase</span>
                        <i class="fa fa-arrow-circle-o-right rightArrowIcon" aria-hidden="true" ></i>

                        <span className='logout' onClick={navigateToLogin}>Logout</span>
                    </div>
                </div>
                {/* header section end  */}
                <div className='MostOutersec' >
                    <div className='midsec'>
                        <div className='BlogTitle'>Blogs</div>
                        <button className='createPostButton' onClick={navigateToDescription}><i class="fa fa-plus-circle plusCircle" aria-hidden="true"></i>
                            Create new post</button>
                    </div>
                    <div className='sentence'>Publish your passion,your way...</div>
                    <hr className='sepratingLineBetweentextandblogtext'></hr>
                    <div className='textsec'>
                        <div className='helloworldText'><strong>Hello World</strong></div>
                        <div className='createdbyName'><strong>Created By</strong><span > ishwari.kanase@gmail.com</span></div>
                        <div><strong>Creadted At</strong><span>1st Dec,2021</span></div><hr />
                        <div className='LoremIpsumSpeech'>lorem ispum is simply dummy text of theprinting and typesetting industry.lorem ispum has been the industrys standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</div><br />
                        <button className='thumbsUp'><i class="fa fa-thumbs-up thumbsUpIcon" aria-hidden="true"></i>
                            0</button>
                        <button className='thumbsDown'><i class="fa fa-thumbs-down thumbsDownIcon" aria-hidden="true"></i>

                            0</button>
                        <button className='editButton' onClick={navigateToDescription}><i class="fa fa-pencil editButtonIcon" aria-hidden="true" ></i>
                            Edit</button>
                        <button className='deleteButton'><i class="fa fa-trash deleteBUttonIcon" aria-hidden="true"></i>
                            Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HelloWorldBlog;