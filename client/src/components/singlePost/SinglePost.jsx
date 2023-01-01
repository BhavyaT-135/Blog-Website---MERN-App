import axios from "axios";
import React from './singlePost.css'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from '../../context/Context'

export default function SinglePost() {

    const PF = "http://localhost:5000/images/"
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, {
                data: { username: user.username }});
            window.location.replace("/")
        } catch (error) {}
    }

    return (
      <div className='singlePost'>
          <div className='singlePostWrapper'>
            {post.photo && (
                <img
                  src={PF + post.photo}
                  alt=''
                  className='singlePostImg'
                />
            )}
              <h1 className='singlePostTitle'>
                    {post.title} 
                    {post.username === user?.username && (
                        <div className='singlePostEdit'>
                        <i className='singlePostIcon far fa-edit' onClick={() => setUpdateMode(true)}></i>
                        <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
                        </div>
                    )}  
              </h1>
              <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                        </span>
                  <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
              </div>
              <p className='singlePostDesc'>
                  {post.desc}
              </p>
          </div>
      </div>
  )
}
