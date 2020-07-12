import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {Wrapper, TextLabel, DropDownPicker} from './styledComponents';

interface Props {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  items: any;
  label: string;
}
class PickerDropDown extends Component<Props> {
  render() {
    const {selectedValue, setSelectedValue, items, label} = this.props;
    return (
      <Wrapper>
        <TextLabel>{label}</TextLabel>
        <DropDownPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {items.map((item: any) => (
            <Picker.Item key={item.id} label={item.label} value={item.value} />
          ))}
        </DropDownPicker>
      </Wrapper>
    );
  }
}

export default PickerDropDown;
