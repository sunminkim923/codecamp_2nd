import FunctionalComponentUI from "./Functionalcomponent.presenter"

export default function FunctionalComponent () {

    // return <FunctionalComponentUI count={123} />

    return (
        <>
            {FunctionalComponentUI({ count : 789, school: "다람쥐 초등학교"})}
        </>

    )
}