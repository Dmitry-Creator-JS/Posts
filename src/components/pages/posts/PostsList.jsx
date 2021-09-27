import React from 'react';
import PostItem from "./PostItem";


const PostsList = (props) => {


    return (
        <div>
            <div>

            </div>
            <h1 style={{textAlign: 'center'}}> Посты на разные темы: </h1>
            {props.posts.map(post => <PostItem post={post} remove={props.remove} id={post.id} title={post.title} body={post.body} key={post.id} />)}
        </div>
    );
};

export default PostsList;