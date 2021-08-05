import Button01 from "../../commons/buttons/Button01";
import { MyButton } from "./form.styles";
export default function FormUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>폼화면입니다.</div>
      이메일 :
      <input type="text" {...props.register("email")} />
      <div style={{ color: "red" }}>{props.errors.email?.message}</div>
      비밀번호 :
      <input type="password" {...props.register("password")} />
      <div>{props.errors.password?.message}</div>
      <MyButton type="submit" isActive={props.isActive}>
        로그인하기
      </MyButton>
      <Button01
        type="submit"
        buttonName="로그인하기"
        isActive={props.isActive}
      ></Button01>
    </form>
  );
}
