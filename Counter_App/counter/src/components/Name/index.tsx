import styled from '@emotion/styled';

const Container = styled.input`
  width: 90px;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  margin: 5px;
`;

interface Props {
  readonly name: string;
  readonly type: string;
  setName: any;
}

export const Name = ({ setName }: Props) => {
  const changeHandler = (e: any) => {
    setName(e.target.value);
  };
  return <Container onChange={(e) => changeHandler(e)}></Container>;
};
