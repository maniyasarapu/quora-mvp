import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
const Post = () => {
    return (
        <div className='posts'>
            <div className='post_data'>
            <Avatar/>
            <h4>Username</h4>
            </div>
            <div className='post_qst'>
                <h3>What is your question or link?</h3>
            </div>
        </div>
    )
}

export default Post
