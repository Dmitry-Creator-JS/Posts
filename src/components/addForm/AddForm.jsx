import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import a from './addForm.module.css'

const AddForm = ({add}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        id: ''
    })

    const createPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post ,id: Date.now()
        }
        add(newPost)
        setPost({...post, title: '', body: ''} )


    }

    return (
        <div className={a.add}>
            <div className={a.inp}>
                <MyInput
                    value={post.title}
                    placeholder='Заголовок'
                    onChange={(event) => setPost({...post, title: event.target.value})}

                />
                <MyInput
                    value={post.body}
                    placeholder='Опсиание'
                    onChange={(event) => setPost({...post, body: event.target.value})}

                />
            </div>

            <div className={a.btns}>
                <MyButton onClick={createPost}> Добавить пост </MyButton>
            </div>


        </div>

    );
};

export default AddForm;