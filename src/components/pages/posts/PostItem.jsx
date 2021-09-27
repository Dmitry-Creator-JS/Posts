import React from 'react';
import MyButton from "../../UI/button/MyButton";


const PostItem = ({id, post, body, title, remove}) => {


    return (
        <div className='posts'>
            <div className='title'>
                {id}. {title}
            </div>
            <div className='body'>
                {body}
            </div>
            <div className="btn">
               <MyButton onClick={() => remove(post)} > Удалить </MyButton>
            </div>

        </div>
    );
};

export default PostItem;