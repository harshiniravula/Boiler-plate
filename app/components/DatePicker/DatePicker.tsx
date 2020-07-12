import React, {Component} from 'react';
import {View, Picker, Text, Alert} from 'react-native';
import {Wrapper, TextLabel, DropDownPicker} from './styledComponents';

import DatePicker from 'react-native-datepicker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

interface Props {
  onChangeDate: Function;
}
@observer
class Date extends Component<Props> {
  @observable date: string;
  constructor(props: Readonly<Props>) {
    super(props);
    this.date = '';
  }
  onChangeDate = (date: string) => {
    this.date = date;
    const {onChangeDate} = this.props;
    onChangeDate(date);
  };
  render() {
    return (
      <DatePicker
        style={{width: 200}}
        date={this.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.onChangeDate}
      />
    );
  }
}

export default Date;
