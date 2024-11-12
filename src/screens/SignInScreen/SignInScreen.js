import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../Assets/images/SampleLogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPresssed = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPresssed = () => {
    console.warn('Forgot Password');
  };

  const onSignInMicrosoft = () => {
    console.warn('Microsoft');
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

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSignInPresssed} text="Sign In" />
        <CustomButton
          onPress={onForgotPasswordPresssed}
          text="Forgot Password"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignInMicrosoft}
          text="Sign In with Microsoft"
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
    </ScrollView>
  );
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
});
export default SignInScreen;
