
import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
    mutation uploadFile ($file: Upload!){
        uploadFile(file: $file) {
            url
        }
    }
`

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

export default function ImagePreviewPage () {
    const [ imageUrl, setImageUrl ] = useState ("")
    const [ file, setFile ] = useState ("")
    const [ writer, setWriter ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ contents, setContents ] = useState("")


    const [ uploadFile ] = useMutation(UPLOAD_FILE)
    const [ createBoard ] = useMutation(CREATE_BOARD)

    function onChangeFile( event : ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if (!file?.size) {
            alert('파일이 없습니다.')
            return;
        }
        if (file.size > 5 * 1024 * 1024 ) {
            alert('파일이 너무 큽니다. (제한: 5MB)')
            return;
        }
        if (!file.type.includes("png") && !file.type.includes("jpeg")) {
            alert("잘못된 파일 형식입니다.")
            return;
        }

        // 단지 미리보기 작업만 진행. 스로리지 업로드 X
        const fileReader = new FileReader ()
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) => {
            setImageUrl(data.target.result) //임시주소
            setFile(file)
        }
    }



    function onChangeWriter (event: ChangeEvent<HTMLInputElement>) {
        setWriter(event.target.value)
    }
    
    function onChangePassword (event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }
    
    function onChangeTitle (event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function onChangeContents (event: ChangeEvent<HTMLInputElement>) {
        setContents(event.target.value)
    }

    async function onClickSubmit (){
        const resultFile = await uploadFile({
            variables: {
                file:file
            }
        })
       const image = resultFile.data.uploadFile.url


        try{
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents,
                        images: [image]
                    }
                }
            })
            console.log(result.data.createBoard._id)
        }catch(error){
            alert(error.message)
        }
    }
    return (
    <>
        <button onClick={onClickSubmit}>게시물 등록하기</button> <br />
        <input type="text" onChange={onChangeWriter} /> <br />
        <input type="text" onChange={onChangePassword} /> <br />
        <input type="text" onChange={onChangeTitle} /> <br />
        <input type="text" onChange={onChangeContents} /> <br />

        <img src={imageUrl} />
        <input type="file" onChange={onChangeFile} />
    </>
    )
    }