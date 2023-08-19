import React from 'react'
import Article from './Article';


const Articles = ({Articles}) => {
    return(   
        <div className='articles'>
            {
                Articles.map((article, idx) => 
                    <Article 
                    key = {idx} 
                    id = {article.id}
                    title = {article.title}
                    body = {article.body}
                    />
                )   
            }
        </div>
    )
}

export default Articles





