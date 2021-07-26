import { useEffect, useState } from "react"

export default function UseEffectPage() {
    const [ count, setCount ] = useState(0);

    console.log("시작합니다!")

    useEffect(() => {
        console.log("그려진 뒤 입니다.")
        console.log("업데이트 완료!")
    },[ ])

    

    console.log("그리기 직전!")

    function onClickCount () {
        setCount( prev => prev + 1)
    }
    return (
        <>
            <div>컴포넌트예요~</div>
            <div>카운트: {count}</div>
            <button onClick={onClickCount}> 카운트 + 1</button>
        </>

    )

}