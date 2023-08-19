import React from 'react'
import { useNavigate } from 'react-router-dom'
const Article = ({id,title,test}) =>{

    const openPostDetails = (id) =>{
        nav(`/posts/${id}`)
    }

    const nav = useNavigate()
    return(
        <div className='articleMain'>
            <div onDoubleClick={()=>openPostDetails(id)} style={{cursor: 'pointer'}} className='articleBody'>
                <div className='id'>{id}</div>  
                <div className='title'> {title}</div>  <button className='deleteBtn'>Delete</button>
            </div>
        </div>
    )
}

export default Article