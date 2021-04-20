import React from 'react'

function Post({message}) {
    return (
        <div className='post'>
            {message.text}
        </div>
    )
}

export default Post
