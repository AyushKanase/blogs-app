import './HelloWorldBlog.css';
function HelloWorldBlog() {
    return (
        <div>
            <div>
                {/* header section start  */}
                <div className='headpartation'>
                    <div className='HeadSecLeftside'>Blogs</div>
                    <div className='HeadRightsideSec'>
                        <span className='Name'>Ishwari Kanase</span>
                        <span className='logout'>Logout</span>
                    </div>
                </div>
                {/* header section end  */}
                <div className='MostOutersec' >
                    <div className='midsec'>
                        <div className='BlogTitle'>Blogs</div>
                        <button className='createPostButton'>Create new post</button>
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
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HelloWorldBlog;