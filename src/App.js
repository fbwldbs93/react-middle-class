import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      {/* <Box bgColor="teal" /> */}
      {/* <Circle bgColor="whitesmoke" /> */}
      {/* <Btn>Log in</Btn> */}
      {/* <Btn as="a" href="/">
        Log in as a tag
      </Btn> */}
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}
//npm i styled-components
/*styled component css 적용시 자동완성
vscode-styled-components 익스텐션 다운받기
*/

/*
  CSS 코드를 CSS 방식 그대로 사용가능(JS 형식으로 변환필요 X)
  html 코드에 하나씩 스타일을 붙여서 사용하는 것 보다 보기 편리하고 깔끔함
*/

export default App;
