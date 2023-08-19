import React, { useEffect, useState } from 'react'
import FilterSorted from '../components/FilterSorted';
import AddPost from '../components/AddPost';
import axios from 'axios'
import Articles from '../components/Articles';
import { useRequest } from '../utils/useRequest';
import Pagination from '../components/Pagination';



const Statii = () => {



    const [req, loading, error] = useRequest(async () =>{
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${settingReq.page}&_limit=${settingReq.limit}`)
        setPosts(resp.data)
        setCopyOfPosts(resp.data)
        let calculate = resp.headers['x-total-count'] / settingReq.limit
        setCalculate(calculate)
        let tmp = []
        

        if (settingReq.page == 1 && calculate >= 3) {
            tmp = [1,2,3]
        } else if (settingReq.page == 1 && calculate == 2) {
            tmp = [1,2]
        } else if (settingReq.page == 1 && calculate == 1) {
            tmp = [1]
        } else if (settingReq.page == calculate && calculate >= 3) {
            tmp = [settingReq.page-2,settingReq.page-1,settingReq.page]
        } else if (settingReq.page == calculate && calculate == 2) {
            tmp = [1,2]
        }else {
            tmp = [settingReq.page-1,settingReq.page,settingReq.page+1]
        }

        setPaginationButtons(tmp)
    })



    const [calculate, setCalculate] = useState()
    const [posts, setPosts] = useState([]);
    const [copyOfPosts, setCopyOfPosts] = useState([])
    const [settingReq, setSettingReq] = useState({page:1, limit:5})
    const [paginationButtons, setPaginationButtons] = useState([])
    

    useEffect(()=>{
        req()
    },[settingReq])


    const addPost = (title) =>{
        const post = {id:posts.length+1,title}
        setPosts([...posts, post ])
        setCopyOfPosts([...posts,post])
    }

    const arrowFurther = () =>{
        setSettingReq({...settingReq, page: settingReq.page+1 })
    }
   
    const arrowBack = () =>{
        setSettingReq({...settingReq, page: settingReq.page-1})
    }
    // [ 1,2,3,4,5,6,7,8,9,10 ]
    // [ 5,6,7 ]

    if (loading==false){
        return (
            <>
                <div className='m'>
                    <div className="main">
                        <FilterSorted copyOfPosts={copyOfPosts} setCopyOfPosts={setCopyOfPosts} Posts={posts}/> 
                        <Articles Articles={copyOfPosts}/> 
                        <div className='pagination-buttons'> 
                            <button onClick={arrowBack} style={settingReq.page == 1? {display:'none'} : {display:'block'} }>{"<"}</button>
                            {
                                paginationButtons.map((paginationButton)=>{
                                    return( 
                                        settingReq.page == paginationButton ?
                                        <button style={{background: 'blue'}} onClick={()=>setSettingReq({...settingReq,page:paginationButton})}>{paginationButton}</button>
                                        :
                                        <button onClick={()=>setSettingReq({...settingReq,page:paginationButton})}>{paginationButton}</button>
                                    )
                                })
                            }
                            
                            <button onClick={arrowFurther} style={settingReq.page == calculate? {display:'none'} : {display:'block'} }>{">"}</button>
                        </div>
                        <Pagination setSettingReq={setSettingReq} settingReg={settingReq}/>
                    </div>
                    <AddPost addPost={addPost}/>
                </div>
            </>
        )
    }else{
       return <h1 style={{color:'blue'}}>LOADING...</h1>
    }
}

export default Statii


