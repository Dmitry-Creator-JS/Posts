import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostsList from "./PostsList";
import AddForm from "../../addForm/AddForm";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/modal/MyModal";
import '../../../styles/App.css'

const Posts = () => {
    const [posts, setPosts] = useState([

    ])

    const [modal, setModal] = useState(false)

    async function getData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setPosts(response.data)

    }
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))


    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const lookModal = () => {
        setModal(true)
    }

    const deleteAll = () => {
        setPosts([])
    }

        // useEffect(() => {
        //     getData()
        // }, [])

    return (
        <div>
            <div className='add-post'>

                <MyModal visible={modal} setVisible={setModal}> <AddForm  add={addPost}/> </MyModal>



            </div>
            <div className=' posts-btns'>
                <MyButton onClick={deleteAll} > Удалить все </MyButton>
                <MyButton onClick={lookModal} > Добавить пост </MyButton>

                <MyButton onClick={getData} > GET POSTS </MyButton>

            </div>
            {posts.length ? <PostsList posts={posts} setPosts={setPosts} add={addPost} remove={deletePost}  /> :  <h1>Нет постов...</h1> }
        </div>
    );
};

export default Posts;