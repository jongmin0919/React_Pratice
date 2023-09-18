import React from 'react';
import styled from '@emotion/styled';
// 이모션 사용을 위한 임포트
import {useState} from 'react';
// 리액트의 useState 훅을 사용하기 위한 임포트
import {Button} from 'components/Button';
// 버튼 컴포넌트 임포트
import {Label} from 'components/Label';
// 라벨 컴포넌트 임포트

// --------------------------  이모션 라이브러리의 Styled를 통한 CSS 속성 적용 -------------------------
const Container = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: cetner;
  `;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;



// ------------------------------------  App ------------------------------------------

function App() {

  // ---------------------------------  counter 함수 설정 -------------------------------------

  const [counter, setCounter] = useState(0);
  // useState Hook을 사용해
  // 배열의 초기값을 0으로 설정하고 배열의 변수명은 counter, 변수에 적용할 함수는 setCounter로 설정한다.

  const sub = () =>{
    setCounter(counter - 1);
  }
  // sub 함수는 setCounter의 함수를 이용해 counter의 값을 -1 해주도록 한다.
  const add = () =>{
    setCounter(counter + 1);
  }
  // add 함수는 setCounter의 함수를 이용해 counter의 값을 +1 해주도록 한다.

  // ----------------------------------  interface ----------------------------------------
  return (
    <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={sub}/>
          {/* 버튼 컴포넌트1 */}
          <Label data = {counter}></Label>
          {/* 라벨 컴포넌트 */}
          <Button label="+" onClick={add}/>
          {/* 버튼 컴포넌트2 */}
        </Contents>
    </Container>
  );
}

export default App;
