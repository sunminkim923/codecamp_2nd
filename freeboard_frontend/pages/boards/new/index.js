import {Back, Wrapper, Title, Back_2, Text_1, Text_2, Text_3, Text_4, Title_1, Text_5, Text_6, Adress, AdressNumber, Search, AdressName} from '../../../styles/boards/new/BoardsNew'

export default function New() {

    return (
    <Wrapper>    

        <Back>
            <Title>게시물 등록</Title> 
            <Back_2>
                <Text_1>
                    <Text_2>
                        <Text_3>작성자</Text_3>
                        <Text_4 placeholder="이름을 적어주세요."></Text_4>
                    </Text_2>
                    <Text_2>
                        <Text_3>비밀번호</Text_3>
                        <Text_4 type="password" placeholder="비밀번호를 입력해주세요"></Text_4>
                    </Text_2>
                </Text_1>
                <Title_1>
                    <Text_3>제목</Text_3>
                    <Text_4 placeholder="제목을 작성해주세요."></Text_4>
                </Title_1>
                <Text_5>
                    <Text_3>내용</Text_3>
                    <Text_6 placeholder="내용을 작성해주세요."></Text_6>
                </Text_5>
                <Adress>
                    <AdressName>주소</AdressName>
                    <AdressNumber placeholder="07250"></AdressNumber>
                    <Search placeholder="우편번호 검색"></Search>
                </Adress>
                
            </Back_2>
        

        </Back>

    </Wrapper>    
    )
}