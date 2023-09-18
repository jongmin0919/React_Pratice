import styled from '@emotion/styled';

// 해당 버튼 스타일을 버튼 컴포넌트의 메인 index에 옮겨놓음
const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover{
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active{
    box-shadow: inset 5px 5px 10px  rgba(0, 0, 0, 0.2);
  }
`;

// 해당 인터페이스의 속성을 명시적으로 작성.
interface Props {
    readonly label: string;
    // 오직 label 속성을 읽어올건데 그 값은 문자열로,
    readonly onClick: () => void;
    // 또한 오직 onClick 속성을 읽어올건데 그 속성의 함수는 void, 즉 App.tsx에서 즉시 실행되는 값임을 나타냄
}

export const Button = ({label, onClick} : Props) => {
  // const Button 함수를 되돌려줄건데, 매게변수로는 Props에서 읽어온 label과 onclick 값을 사용할거고
    return <Container onClick={onClick}>label</Container>;
  // 최종적으로 돌려줄 내용은 위의 내용을 App.tsx에 돌려줌
}