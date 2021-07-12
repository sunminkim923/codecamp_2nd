import styled from '@emotion/styled'

export const MyInput = styled.input``

export const MyButtom = styled.button`
    background-color: ${(props) => props.active ? 'yellow' : 'gray'} // color : yellow 랑 같음

`

/* "안녕하세요" + aaa + 입니다
`안녕하세요${aaa}입니다`
->템플릿 리터럴 */

