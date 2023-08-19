import React,{useState} from 'react'

export const useRequest = (request) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const req = async () =>{
      try{
        setLoading(true)
        await request()
      }catch{
        setError(true)
      }finally{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
      }
  }
  return (
    [req,loading,error]
  )
}
