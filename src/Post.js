import React from 'react'
import Button from './Button'

function Post() {
    return (
        <div className="Post">
            <h2>Write a message and we'll send it to you on the specified date</h2>
            <textarea placeholder='Type a message for yourself'></textarea>
            <input type="date" />
            <Button content='Save' />
        </div>
    )
}

export default Post
