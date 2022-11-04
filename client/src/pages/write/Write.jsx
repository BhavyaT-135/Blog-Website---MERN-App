import './write.css'
import postImg from '../../assets/post.jpg'
import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../context/Context'

export default function Write() {
    const [ title, setTitle ] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc
        }
        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                axios.post("/upload", data)
            } catch (err) {
                
            }
        }
        axios.post("/posts")
    }
  return (
      <div className='write'>
          <img 
              className='writeImg'
              src={postImg}
              alt=''
          />
          <form className='writeForm' onSubmit={handleSubmit}>
              <div className='writeFormGroup'>
                  <label htmlFor='fileInput'>
                      <i className='writeIcon fas fa-plus'></i>
                    </label>
                  <input type='file' id='fileInput'style={{display: "none"}} />
                  <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
              </div>
              <div className='writeFormGroup'>
                  <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
              </div>
              <button className='writeSubmit' type="submit">Publish</button>
          </form>
      </div>
  )
}
