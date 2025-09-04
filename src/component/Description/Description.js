import './Description.css';
function Description() {
    return (
        <div>
            <div>
                {/* header section start  */}
                <div className='Descriptionheadpartation'>
                    <div className='DescriptionHeadSecLeftside'>Blogs</div>
                    <div className='DescriptionHeadRightsideSec'>
                        <span className='DescriptionName'>Ishwari Kanase</span>
                        <span className='DescriptionLogout'>Logout</span>
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
    )
}
export default Description;