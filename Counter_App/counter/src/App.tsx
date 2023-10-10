import React from 'react';
import styled from '@emotion/styled';
// 이모션 사용을 위한 임포트
import {useState} from 'react';
// 리액트의 useState 훅을 사용하기 위한 임포트
import {Button} from 'components/Button';
// 버튼 컴포넌트 임포트
import {Label} from 'components/Label';
import {Name}  from 'components/Name';
// 라벨 컴포넌트 임포트

// --------------------------  이모션 라이브러리의 Styled를 통한 CSS 속성 적용 -------------------------
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  const [userName, setUserName] = useState('');
  
  const sub = () =>{
    setCounter(counter - 1);
  }
  
  const add = () =>{
    setCounter(counter + 1);
  }

  const WelcomeName = () => {
    setUserName(`${userName} 님 환영합니다!`)
  }

      

  // ----------------------------------  interface ----------------------------------------
  return (
    <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={sub}/>
          <Label data = {counter}></Label>
          <Button label="+" onClick={add}/>
          <Name type = "text" name = {userName}></Name>
          <Button label="입력" onClick={WelcomeName}/>
        </Contents>
    </Container>
  );
}

export default App;
