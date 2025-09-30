import { useEffect, useState } from "react";


export default function useFetch(url: any, options = {}) {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState(null)
    const [empty, setEmpty] = useState(false)

    useEffect(()=> {
        if(!url) return

        let isMounted = true

        fetch(url,options)
          .then(async (res)=> {
            if(!res.ok) {
                throw new Error(`Http Error : ${res.status}`)
            }
            const result = await res.json()
            if(isMounted) {
                if((Array.isArray(result) && result.length===0) || (typeof result === 'object' && Object.keys(result).length===0)) {
                    setEmpty(true)
                }
                setData(result)
            }
          })
          .catch((err)=> {
            if(isMounted) {
                setError(err.message || 'Something went wrong')
            }
          })
          .finally(()=> {
            if(isMounted) {
                setLoading(false)
            }
          })

          return(()=>{
            isMounted=false
          })

    },[url, JSON.stringify(options)])

    return {data, error, empty, loading}

}