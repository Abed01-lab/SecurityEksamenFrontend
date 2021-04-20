import React from 'react'
import Post from './Post'
import PostMaker from './PostMaker'
import example from './example.json'

//husk lave en liste med posts
function MainBox() {
    return (
        <div className='mainBox'>
            <PostMaker />
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
            <Post message={example}/>
        </div>
    )
}

export default MainBox
