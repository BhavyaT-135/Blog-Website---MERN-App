import React from './singlePost.css'
import postImg from '../../assets/post.jpg'

export default function SinglePost() {
  return (
      <div className='singlePost'>
          <div className='singlePostWrapper'>
              <img
                  src={postImg}
                  alt=''
                  className='singlePostImg'
              />
              <h1 className='singlePostTitle'>
                  Lorem ipsum dolor sit amet. 
                  <div className='singlePostEdit'>
                        <i className='singlePostIcon far fa-edit'></i>
                        <i className='singlePostIcon far fa-trash-alt'></i>
                  </div>
              </h1>
              <div className='singlePostInfo'>
                  <span className='singlePostAuthor'>Author: <b>Bhavya</b></span>
                  <span className='singlePostDate'>1 hour ago</span>
              </div>
              <p className='singlePostDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                  officia quidem. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                  officia quidem. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                  officia quidem. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                  officia quidem. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              </p>
          </div>
      </div>
  )
}
