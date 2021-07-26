import { Component, createRef } from "react"
import { Router } from "next/router"


export default class LifecycleClassPage extends Component {
    state = {
        count:0
    }

    inputRef = createRef <HTMLInputElement>()
    componentDidMount() {
        console.log("마운트 완료!")
        this.inputRef.current?.focus;
    }

    componentDidUpdate() {
        console.log("컴포넌트 변경됨")
    }

    componentWillUnMount () {
        alert ("잘가요~")
    }

    onClickCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    onclickMove = () => {
        Router.push("/");
    }

    render() {
        return (
            <>
                <input type="password" ref={this.inputRef} />
                <div>카운트: {this.state.count}</div>
                <button onClick={this.onClickCount}>카운트 + 1</button>
                <div>클래스 컴포넌트입니다.</div>
                <button onClick={this.onclickMove}>나가기</button>
            </>
        )
    }

}