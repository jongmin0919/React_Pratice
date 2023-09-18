import styled from '@emotion/styled';

//Button과 마찬가지로 span 또한 이모션을 이용한 스타일 지정
const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2 rem;
`;

// Button과 마찬가지로 label의 인터페이스 props를 설정해줌.
interface Props {
    readonly data: number;
    // 오직 읽어오는 데이타는 숫자로만.
}

export const Label = ({data} : Props) => {
    return <Container>{data}</Container>;
    // 해당 데이터를 App.tsx의 App.tsx의 Label에 반환
};