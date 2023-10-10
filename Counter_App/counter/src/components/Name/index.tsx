import styled from '@emotion/styled';


const Container = styled.input`
  width: 15px;
  height: 5px;
  border-radius: 10px;
`;

interface Props {
    readonly name: string;
    readonly type: string;
}

export const Name = ({name} : Props) => {
    return <Container>{name}</Container>;  
};