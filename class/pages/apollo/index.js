import {useState} from 'react'
import {useMutation,gql} from '@apollo/client'

export default function ApolloPage () {

    const [name, setName] = useState ()
    const [age, setAge] = useState ()
    const [school, setSchool] = useState ()

    const [qqq] = useMutation(
        gql`
            mutation aaaa($aaa:String, $bbb:Int, $ccc:String) {

                createProfile(name:$aaa,age:$bbb,school:$ccc){
                message
                }
            }
        `
    )

    function onChangeName(event) {
        setName(event.target.value)
    }
    function onChangeAge(event) {
        setAge(event.target.value)
    }
    function onChangeSchool(event) {
        setSchool(event.target.value)
    }

    function onClickSubmit() {

        console.log(name)  // -> state에 저장된 값 ->gql로 전송 -> 임시 저장후 전송
        console.log(age)
        console.log(school)
        qqq({
            variables: {
                aaa : name,
                bbb : Number(age),
                ccc : school
            } 
        })
    }

    return (
        <>
            <div></div>
            이름: <input type="text" onChange={onChangeName} /> <br />
            나이: <input type="text" onChange={onChangeAge} />  <br />
            학교: <input type="text" onChange={onChangeSchool} />   <br />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>

    )






}