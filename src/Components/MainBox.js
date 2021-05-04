import {React, useState, useEffect} from 'react'
import Post from './Post'
import PostMaker from './PostMaker'
import facade from './ApiFacadeFakeBook'
import firebase from './FirebaseApi'

//husk lave en liste med posts
function MainBox() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const user = firebase.auth().currentUser;
        console.log(user.uid, user.za)
        facade.getPosts(user.uid, user.za).then((data) => {
            console.log(data)
            setPosts(data)
        })
    },[])

    const Posts = () => {
        return posts.map(post => (
            <Post message={post.message}/>
        ))
    }

    return (
        <div className='mainBox'>
            <PostMaker setPosts={setPosts}/>
            {posts ? <Posts />: null}
        </div>
    )
}

export default MainBox
