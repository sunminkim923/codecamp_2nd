import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage () {

    const [image, setImage] = useState("")
    const divRef = useRef()

    useEffect(() => {
        const img = new Image ()
        img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"
        img.onload = () => {
            setImage(img) // 태그를 state에 넣은것 이다. <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
        }
    }, [])

    function onClickButton () {
        divRef.current?.appendChild(image)
    }$

    return(
        <>

            <div ref={divRef}> </div>
            <button onClick={onClickButton}>이미지 보여주기</button>
        </>

    )
}






