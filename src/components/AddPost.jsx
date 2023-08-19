import React, {useState} from 'react'
import imgwithdog from './imgwithdog.png';

const AddPost = ({addPost}) => {

  const [addPostInput, setAddPostInput] = useState('');



  const addPostButton = () =>{
    addPost(addPostInput)
  }

  return (
    <div className='addNewArticle'>
        <div className="addButton-main">
            <input onChange={e=>setAddPostInput(e.target.value)} className='addPostInput' placeholder='Add post' type="text" />
            <button onClick={addPostButton} className='addButton'>Add</button>
        </div>
        <img src={imgwithdog} alt="" />
    </div>
  )
}

export default AddPost