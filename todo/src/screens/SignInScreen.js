import React, { useState } from 'react'; // <-- 1. useState를 import 합니다.
import { 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable,
  Keyboard,
  Alert //로그인알림 함수
} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import InputComponent from '../components/TextInputComponent'; 
import ButtonComponent from '../components/ButtonComponent';
import { login } from '../api/Auth'; 

const SignInScreen = () => {
  // 이메일 패스워드 저장하기
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  // 로그인버튼 클릭시 일어나는 함수
  const handleLoginSubmit = () => {
    console.log('로그인 시도:', email, password);

    // 이메일이랑 패스워드 비어잇는지 알아보는함수
    if (!email || !password) {
      Alert.alert('입력 오류', '이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    login(email, password)
      .then((response) => {
     
        Alert.alert('로그인 성공', response.message);
  
      })
      .catch((error) => {
     
        Alert.alert('로그인 실패', error.message);
      });
  };
 const isDisabled = !email || !password;

  return (
    <KeyboardAvoidingView
       style={{flex: 1}}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <Pressable 
         style={styles.container}
         onPress={() => Keyboard.dismiss()}
      >
        <ImageComponent /> 
        <InputComponent 
          labelName2="이메일"
          iconName="mail" 
          placeholder="이메일" 
          isPassword={false}
          value={email}
          onChangeText={setEmail}
        />
        <InputComponent
          labelName2="비밀번호"
          iconName="lock"
          placeholder="비밀번호" 
          isPassword={true} 
          value={password}
          onChangeText={setPassword}
        />
        <ButtonComponent 
          text="로그인" 
          onPress={handleLoginSubmit}
          disabled={isDisabled}
        />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor: 'white', 
  }
});

export default SignInScreen;