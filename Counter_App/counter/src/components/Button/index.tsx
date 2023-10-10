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
    readonly onClick: () => void;
}

export const Button = ({label, onClick} : Props) => {
  
    return <Container onClick={onClick}>{label}</Container>;
  
}