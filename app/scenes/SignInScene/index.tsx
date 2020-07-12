import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import RadioForm from 'react-native-simple-radio-button';

import {
  StyleSheet,
  Button,
  Keyboard,
  Slider,
  CheckBox,
  Linking,
  Text,
  ScrollView,
  View,
} from 'react-native';
import {fromHsv, ColorPicker} from 'react-native-color-picker';
import LinearGradient from 'react-native-linear-gradient';

import {branches, gender} from '../../constants/DataConstants';
import {InputValidation} from '../../utils/ValidationUtils';
import I18n from '../../i18n/i18n';
import Input from '../../components/Input';
import PickerDropDown from '../../components/PickerDropDown';
import {
  Wrapper,
  TextLabel,
} from '../../components/PickerDropDown/styledComponents';
import DatePicker from '../../components/DatePicker';

import {
  mobileRegEx,
  nameRegEx,
  emailRegEx,
  passwordRegEx,
} from '../../constants/RegExConstants';

import {
  ColorPickerWrapper,
  SignUpWrapper,
  ColorLabel,
  SignUpDesc,
  SignUpText,
  BasicDetails,
} from './styledComponents';
console.disableYellowBox = true;
@observer
class SignUp extends Component {
  @observable
  selectedColor1!: string;
  @observable
  selectedColor2!: string;
  @observable
  selectedBranch!: string;
  @observable
  dob!: string;
  @observable
  address!: string;
  @observable
  typingSpeed!: number;
  @observable
  isChecked!: boolean;
  @observable
  gender!: string;
  @observable
  hasErrors!: boolean;
  @observable input;
  constructor(props: Readonly<{}>) {
    super(props);
    this.init();
  }
  init = () => {
    this.selectedColor1 = '#03A9F4';
    this.selectedColor2 = '#9575CD';
    this.selectedBranch = 'ECE';
    this.dob = '';
    this.address = '';
    this.typingSpeed = 25;
    this.isChecked = false;
    this.gender = 'female';
    this.hasErrors = false;
  };

  setColor1 = (color: any) => {
    this.selectedColor1 = fromHsv(color);
  };
  setColor2 = (color: any) => {
    this.selectedColor2 = fromHsv(color);
  };
  checkError = (hasError: boolean) => {
    this.hasErrors = hasError || this.hasErrors;
  };
  firstNameValidation = (value: string) => {
    const response = InputValidation(value, nameRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  lastNameValidation = (value: string) => {
    const response = InputValidation(value, nameRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  mobileNumberValidation = (value: string) => {
    const response = InputValidation(value, mobileRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  emailValidation = (value: string) => {
    const response = InputValidation(value, emailRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  passwordValidation = (value: string) => {
    const response = InputValidation(value, passwordRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  confirmPasswordValidation = (value: string) => {
    const response = InputValidation(value, passwordRegEx);
    this.checkError(this.hasErrors);
    return response;
  };
  selectGender = (gender: string) => {};
  changeBranch = (branch: string) => {
    this.selectedBranch = branch;
  };
  changeDob = (date: string) => {
    this.dob = date;
  };
  changeAddress = (address: string) => {
    this.address = address;
  };
  changeTypingSpeed = (speed: number) => {
    this.typingSpeed = speed;
  };
  toggleCheckBox = (value: boolean) => {
    this.isChecked = value;
  };
  render() {
    return (
      <ScrollView>
        <LinearGradient
          style={styles.gradientStyles}
          colors={[this.selectedColor1, this.selectedColor2]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <ColorPickerWrapper>
            <ColorLabel>{I18n.t('selectFavourite')}</ColorLabel>
            <ColorPicker
              defaultColor={this.selectedColor1}
              onColorChange={this.setColor1}
              style={styles.colorPicker}
              hideSliders={true}
            />
            <ColorPicker
              hideSliders={true}
              defaultColor={this.selectedColor2}
              onColorChange={this.setColor2}
              style={styles.colorPicker}
            />
          </ColorPickerWrapper>
          <SignUpWrapper>
            <SignUpText>{I18n.t('signUp')}</SignUpText>
            <SignUpDesc>{I18n.t('pleaseFill')}</SignUpDesc>
            <BasicDetails>
              <Input
                placeholder={I18n.t('firstName')}
                validation={this.firstNameValidation}
              />
              <Input
                placeholder={I18n.t('lastName')}
                validation={this.lastNameValidation}
              />
            </BasicDetails>
            <Input
              placeholder={I18n.t('mobileNumber')}
              validation={this.mobileNumberValidation}></Input>
            <Input
              placeholder={I18n.t('email')}
              validation={this.emailValidation}></Input>
            <Input
              placeholder={I18n.t('password')}
              validation={this.passwordValidation}
              isSecure={true}></Input>
            <Input
              placeholder={I18n.t('confirmPassword')}
              validation={this.confirmPasswordValidation}
              isSecure={true}></Input>

            <Wrapper>
              <TextLabel>{I18n.t('selectGender')}</TextLabel>
              <RadioForm
                radio_props={gender}
                initial={'female'}
                formHorizontal={true}
                buttonColor={'grey'}
                onPress={this.selectGender}
                labelColor="grey"
                selectedButtonColor="grey"
                buttonSize={10}
                buttonStyle={{padding: 0, margin: 0}}
                style={{
                  flex: 1,
                  margin: 7,
                }}
                labelStyle={{
                  fontSize: 12,
                  padding: 0,
                  marginRight: 12,
                  marginLeft: 0,
                }}
              />
            </Wrapper>
            <Wrapper>
              <PickerDropDown
                label={I18n.t('selectBranch')}
                selectedValue={this.selectedBranch}
                setSelectedValue={this.changeBranch}
                items={branches}></PickerDropDown>
              <DatePicker onChangeDate={this.changeDob}></DatePicker>
            </Wrapper>
            <Wrapper>
              <TextLabel>{I18n.t('address')}</TextLabel>
              <Input
                placeholder={I18n.t('addressPlaceholder')}
                validation={this.changeAddress}
                isMulti={true}
              />
            </Wrapper>
            <Wrapper>
              <TextLabel>{I18n.t('typingSpeed')}</TextLabel>
              <Slider
                style={{flex: 1}}
                minimumValue={0}
                maximumValue={50}
                onValueChange={this.changeTypingSpeed}
              />
            </Wrapper>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <CheckBox
                disabled={false}
                value={this.isChecked}
                onValueChange={this.toggleCheckBox}
              />
              <Text>
                I accept the &nbsp;
                <Text
                  style={{color: 'blue'}}
                  onPress={() => Linking.openURL('http://google.com')}>
                  Terms of use
                </Text>
                &nbsp; & &nbsp;
                <Text
                  style={{color: 'blue'}}
                  onPress={() => Linking.openURL('http://google.com')}>
                  Privacy policy
                </Text>
              </Text>
            </View>
            <Button title="Sign UP" onPress={Keyboard.dismiss} />
          </SignUpWrapper>
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  colorPicker: {
    flex: 1,
    maxWidth: 70,
    margin: '3%',
  },
  gradientStyles: {
    display: 'flex',
    height: '100%',
    paddingHorizontal: 10,
  },
});

export default SignUp;
