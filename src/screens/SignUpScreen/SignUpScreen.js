import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSignInPresssed = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPresssed = () => {
    console.warn('Forgot Password');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignInApple = () => {
    console.warn('Apple');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');
  };

  <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignInPresssed} text="Sign In" />
      <CustomButton
        onPress={onForgotPasswordPresssed}
        text="Forgot Password"
        type="TERTIARY"
      />

      <CustomButton
        onPress={onSignInFacebook}
        text="Register"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInApple}
        text="Sign In with Apple"
        bgColor="#E3E3E3"
        fgColor="#363636"
      />

      <CustomButton
        onPress={onSignUpPressed}
        text="Don't Have an Account? Create One"
        type="TERTIARY"
      />
    </View>
  </ScrollView>;
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '051C60',
    margin: 10,
  },
});
export default SignUpScreen;
