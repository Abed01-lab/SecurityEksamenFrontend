import {React, useState, useEffect} from 'react'
import Post from './Post'
import PostMaker from './PostMaker'
import facade from './ApiFacadeFakeBook'
import firebase from './FirebaseApi'

function MainBox() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const user = firebase.auth().currentUser;
        facade.getPosts(user.za).then((data) => {
            setPosts(data)
        })
    },[])

    const Posts = () => {
        return posts.map(post => <Post message={post.message}/>  )
    }

    return (
        <div className='mainBox'>
            <PostMaker setPosts={setPosts}/>
            {posts ? <Posts />: null}
        </div>
    )
}

export default MainBox