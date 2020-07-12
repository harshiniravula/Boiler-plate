import {observer} from 'mobx-react';

import React, {Component} from 'react';
import {InputText, Wrapper, ErrorText, MultiText} from './styledComponents';
import {observable} from 'mobx';
import {Alert} from 'react-native';

interface Props {
  placeholder: string;
  validation: Function;
  isMulti?: boolean;
  isSecure?: boolean;
}
@observer
class Input extends Component<Props> {
  @observable value: string;
  @observable hasError: boolean;
  @observable errorMessage: string;
  static defaultProps = {
    isSecure: false,
  };

  constructor(props: Readonly<Props>) {
    super(props);
    this.value = '';
    this.hasError = false;
    this.errorMessage = '';
  }
  onChangeText = (value: string) => {
    this.value = value;
  };
  validate = () => {
    const {validation, isMulti} = this.props;
    if (!isMulti) {
      const {hasError, errorMessage} = validation(this.value);
      this.hasError = hasError;
      this.errorMessage = errorMessage;
    }
  };
  render() {
    const {placeholder, isMulti, isSecure} = this.props;
    if (isMulti) {
      return (
        <MultiText
          placeholder={placeholder}
          multiline
          onChangeText={this.onChangeText}
          onBlur={this.validate}>
          {this.value}
        </MultiText>
      );
    } else {
      return (
        <Wrapper>
          <InputText
            hasError={this.hasError}
            placeholder={placeholder}
            onChangeText={this.onChangeText}
            onBlur={this.validate}
            secureTextEntry={isSecure}>
            {this.value}
          </InputText>
          {this.hasError && <ErrorText>{this.errorMessage}</ErrorText>}
        </Wrapper>
      );
    }
  }
}

export default Input;
