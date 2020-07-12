import styled from 'styled-components/native';

export const InputText = styled.TextInput`
  background-color: #f2f2f2;
  border: 1px solid
    ${(props: {hasError: boolean}) => (props.hasError ? 'red' : 'transparent')};
  flex-basis: 48%;
  padding-left: 3%;
  margin: 3% 0%;
`;
export const Wrapper = styled.View`
  flex-basis: 48%;
`;
export const ErrorText = styled.Text`
  color: red;
`;

export const MultiText = styled.TextInput`
  border: 1px solid black;
  flex: 1;
`;
