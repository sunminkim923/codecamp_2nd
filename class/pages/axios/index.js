import axios from 'axios'
import {useState} from 'react'

export default function AxiosPage() {

    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')
    const [data4, setData4] = useState('')

    // async function handleClickData () {
    const handleClickData = async () => {     
        //화살표 함수로 변형
        const aaa = await axios.get('https://koreanjson.com/posts')
         // await 를 쓰기 위해서는 async를 꼭 같이 써야 함
        // console.log (aaa.data[1].title)
        setData (aaa.data[5].title)   
        setData2 (aaa.data[5].content)
        // 결과값이 객체 형태로 나타난다 -> 변수에 담아서 화면에 보여주면 된다
        const bbb = await axios.get('https://koreanjson.com/posts/5')
        setData3 (bbb.data.title)
        setData4 (bbb.data.content)
    }

    return (
        <> 
            <div>{data}</div>
            <hr />
            <div>{data2}</div>
            <hr />
            <div>{data3}</div>
            <hr />
            <div>{data4}</div>

            <button onClick={handleClickData}>데이터 불러오기</button>




        </>

    )


}