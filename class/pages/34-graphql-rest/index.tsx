import axios from "axios";

export default function GraphqlRestPage() {
  const onClickSubmit = async () => {
    const result = await axios.post(
      //api 주소
      "https://backend02.codebootcamp.co.kr/graphql",
      //데이터 넣는 부분
      {
        query: `
                mutation createBoard {
                    createBoard ( createBoardInput: { 
                        writer: "철수" ,
                        password: "1234",
                        title: "제목입니다잉",
                        contents: "내용입니다잉",
                    }){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
