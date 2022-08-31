import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img 
        className='postImg'
        src=''
        alt=''
      />
      <div className='postInfo'>
        <div className='post Cats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'></span>
      </div>
    </div>
  )
}
