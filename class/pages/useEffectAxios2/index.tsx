import axios from "axios"
import { useEffect, useState } from "react"

export default functionn UseEffectAxios2Page (){ 

    const [count, setCount] = useState(0)
    const [list, setList] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resultCount = await axios.get("https://api.spaceflightnewsapi.net/v3/articles/count");
            setCount(resultCount.data.coun)
            
            const resultList = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
            setList(resultList.data)
        }
        getData()
    }, [])


    return (
        <>
            <div>총 {count} 개</div>
            <hr />
            {list.map((data) => (
                <>
                    <div>제목: {data.title}</div>))}
                    <div>요약: {data.summary}</div>))}
                    <hr />
                 </>
        </>
    
    )
    }
}