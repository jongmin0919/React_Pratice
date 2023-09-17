import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import {useState} from 'react';
import {Button} from 'components/Button';
import {Label} from 'components/Label';

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



// ---------------------------------------------  App ------------------------------------------------

function App() {
  const [counter, setCounter] = useState(0);
  // 배열의 초기값을 0으로 설정하고 배열의 변수명은 counter, 변수에 적용할 함수는 setCounter로 설정한다.

  const sub = () =>{
    setCounter(counter - 1);
  }
  // sub 함수는 setCounter의 함수를 이용해 counter의 값을 -1 해주도록 한다.
  const add = () =>{
    setCounter(counter + 1);
  }
  // add 함수는 setCounter의 함수를 이용해 counter의 값을 +1 해주도록 한다.

  return (
    <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={sub}/>
          <Label data = {counter}></Label>
          <Button label="+" onClick={add}/>
        </Contents>
    </Container>
  );
}

export default App;
