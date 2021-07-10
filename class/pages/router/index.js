import {useRouter} from 'next/router'

export default function RouterPage () {
    const router = useRouter()


    function onClickMove() {
        Router.push('/detail/1')
    }
    return (

        <button onClick={onClickMove}>이동하기</button>

    )



}