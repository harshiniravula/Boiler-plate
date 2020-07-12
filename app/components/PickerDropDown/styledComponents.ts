import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2% 0%;
`;
export const TextLabel = styled.Text`
  color: grey;
`;
export const DropDownPicker = styled.Picker`
  border: 1px solid black;
  height: 30;
  width: 100;
`;
