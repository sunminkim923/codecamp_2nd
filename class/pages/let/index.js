export default function StatePage () {

    let count = 5

    function aaa() {
        count = count + 1
        console.log(count)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={aaa}>+1</button>
        </>
    )

}