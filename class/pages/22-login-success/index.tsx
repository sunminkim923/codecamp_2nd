import { gql, useQuery } from "@apollo/client";
import router from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            name
        }
    }
`

export default function LoginSuccessPage (){
    const { data } = useQuery (FETCH_USER_LOGGED_IN)
    const {accessToken } = useContext(GlobalContext)
    useEffect(() => {
        if(!accessToken) router.push("/22-login/")
    }, [])

    return (
        <>

            <div>{data?.fetchUserLoggedIn.name}님 환영합니다~</div>
        </>

    )

}
