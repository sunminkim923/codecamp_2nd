import { DatePicker, Rate } from "antd"
import 'antd/dist/antd.css'
import ReactPlayer from 'react-player'
import styled from "@emotion/styled"
import { useState } from "react"

const Youtube = styled(ReactPlayer)`

`

export default function Libraries2Page () {
    
    
    const [rate,setRate] = useState(0)

    function onChangeStar(value) {
        console.log(value)
        setRate(value)
    }


    const [date,setDate] = useState("")

    function onChangeDate (date, dateString) {
        console.log(date)
        setDate(dateString.slice(5,7))
    }

    return ( 
        <div>
            <DatePicker onChange={onChangeDate} /> <br />
            <div>{date}</div>
            <Rate onChange={onChangeStar} /> <br />
            <div>{rate}점</div>
            <Youtube 
                url='https://www.youtube.com/watch?v=J7wBKSnCpe0'
                width="800px"
                height="600px"
                playing={true}
                muted={true}
            />
        </div>
    )
}