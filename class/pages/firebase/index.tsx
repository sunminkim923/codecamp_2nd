import { ChangeEvent, useState } from "react"
import firebase from "firebase/app"

export default function FirebasePage (){


    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    
    function onChangeWriter(event: ChangeEvent<HTMLLIElement>){
        setWriter(event.target.value)
    }

    function onChangeTitle(event: ChangeEvent<HTMLLIElement>){
        setTitle(event.target.value)
    }

    function onChangeContents(event: ChangeEvent<HTMLLIElement>){
        setContents(event.target.value)
    }

    function onClickSubmit(){
        firebase.firestore().collection("blog").add({
            writer: writer,
            title: title,
            contents: contents,
        })
    }

    async function onClickFetch(){
        const result = await firebase.firestore().collection('blog').get()
        result.forEach(doc => console.log(doc.data()))
    }



    return (
        <>
            작성자: <input onChange={onChangeWriter} />        
            제목: <input onChange={onChangeTitle} />        
            내용: <input onChange={onChangeContents} />
            <button onClick={onClickSubmit}>등록하기</button>
            <button onClick={onClickFetch}>가져오기</button>
            
        </>

    )
}