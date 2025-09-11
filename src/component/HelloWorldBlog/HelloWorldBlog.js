import { useNavigate } from 'react-router-dom';
import './HelloWorldBlog.css';
import { getByTitle } from '@testing-library/dom';
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
//    function handelChangeDescription(){
//     axios.get('http://localhost:3001/blog')
//     .then(response=>{

//     })
//    }

    const blogs=[
        {
            Title:"Hello World",
            CreatedBy:"ishwari.kanas@gmail.com",
            CreatedAt:"1st Dec,2021",
            Description:"Lorem ipsum is simply dummy text"
        },
         {
            Title:"Hello World",
            CreatedBy:"ishwari.kanas@gmail.com",
            CreatedAt:"1st Dec,2021",
            Description:"Lorem ipsum is simply dummy text"
        },
         {
            Title:"Hello World",
            CreatedBy:"ishwari.kanas@gmail.com",
            CreatedAt:"1st Dec,2021",
            Description:"Lorem ipsum is simply dummy text"
        },
         {
            Title:"Hello World",
            CreatedBy:"ishwari.kanas@gmail.com",
            CreatedAt:"1st Dec,2021",
            Description:"Lorem ipsum is simply dummy text"
        },

    ]

    

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
                    {blogs.map((blog)=>{
                  return  <div className='textsec' key={blog.id}>
                    
                        <div className='helloworldText'>{blog.Title}</div>
                        <div className='createdbyName'>{blog.CreatedBy}<span > </span></div>
                        <div><strong>{blog.CreatedAt}</strong><span></span></div><hr />
                        <div className='LoremIpsumSpeech'>{blog.Description}</div><br />
                        <button className='thumbsUp'><i class="fa fa-thumbs-up thumbsUpIcon" aria-hidden="true"></i>
                            0</button>
                        <button className='thumbsDown'><i class="fa fa-thumbs-down thumbsDownIcon" aria-hidden="true"></i>

                            0</button>
                        <button className='editButton' onClick={navigateToDescription}><i class="fa fa-pencil editButtonIcon" aria-hidden="true" ></i>
                            Edit</button>
                        <button className='deleteButton'><i class="fa fa-trash deleteBUttonIcon" aria-hidden="true"></i>
                            Delete</button>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default HelloWorldBlog;