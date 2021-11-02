import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostsList from "./PostsList";
import AddForm from "../../addForm/AddForm";
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/modal/MyModal";
import '../../../styles/App.css'
import {PostService} from "../../../API/PostService";
import {getPagesArray, getPagesCount} from "../../../utils/Pages";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [modal, setModal] = useState(false)

    let pagesArray = getPagesArray(totalPages)

    async function getData() {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit))

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

    const changePage = (page) => {
        setPage(page)

    }

        useEffect(() => {
            getData()
        }, [page])

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
            <div className='page__wrapper'>
                {pagesArray.map(p => {
                  return  <span
                      onClick={ () => changePage(p)}
                      key={p}
                      className={page === p ? 'page page__current'   : 'page'}>
                      {p} </span>
                })}
            </div>




        </div>

    );
};

export default Posts;