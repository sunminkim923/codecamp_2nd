export default function State2Page() {

    let count = 7
    function 함수 () {
        count = count + 1 // count += 1 과 같음
        document.getElementById("aaa").innerText = count
        // alert("클릭하셨네요")
        // alert(count)
    }

    return (
        <>
            <div id="aaa">{count}</div>
            <button onClick={함수}>+1</button>
        </>
    )



}