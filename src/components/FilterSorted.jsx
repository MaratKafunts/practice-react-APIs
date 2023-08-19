import React from 'react'
import {useState, useEffect} from 'react'

const FilterSorted = ({Posts, copyOfPosts, setCopyOfPosts}) => {

 const [searchInput, setSearchInput] = useState('')
 const [isSortedBtnClicked, setIsSortedBtnClicked] = useState(false)

    
    useEffect(()=>{
        if(searchInput == ''){
            setCopyOfPosts(Posts)
        }else{
            const filtered = Posts.filter((post)=>{
                let postBody = post.title.toLowerCase()
                if(postBody.startsWith(searchInput)){
                    return true
                }else{
                    return false
                }
            })
            setCopyOfPosts(filtered)
        }
    },[searchInput])

 
const sortPosts = () =>{
    let h = copyOfPosts.slice().sort((post1,post2)=>post1.title.localeCompare(post2.title))
    if(isSortedBtnClicked == false){
        setCopyOfPosts(h)
        setIsSortedBtnClicked(true)
    }else{
        setCopyOfPosts([...Posts])
        setIsSortedBtnClicked(false)
    }
}


  
  return (
    <div className="SearchAndSortBtns">
        <input value={searchInput} onChange={e=>setSearchInput(e.target.value)} placeholder='Search...' type='text' id='button1' className='button'/>
        <button onClick={sortPosts}  id='button2' className='button'>Sort</button>
    </div>
  )
}

export default FilterSorted