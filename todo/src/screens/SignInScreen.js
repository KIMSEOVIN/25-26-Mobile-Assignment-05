import React, { useState } from 'react'; // <-- 1. useState를 import 합니다.
import { 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable,
  Keyboard,
  Alert // <-- 4. 로그인 결과 알림을 위해 Alert를 import 합니다.
} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import InputComponent from '../components/TextInputComponent'; // (InputComponent2는 아마 오타이신 듯)
import ButtonComponent from '../components/ButtonComponent';
import { login } from '../api/Auth'; // <-- 5. 저번에 만든 login 함수를 import 합니다.

const SignInScreen = () => {
  // 2. 이메일과 비밀번호를 저장할 '상태(state)' 2개를 만듭니다.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  // 6. 로그인 버튼 클릭 시 실행될 함수 (과제 2번 내용)
  const handleLoginSubmit = () => {
    console.log('로그인 시도:', email, password);

    // email, password가 비어있는지 간단히 확인
    if (!email || !password) {
      Alert.alert('입력 오류', '이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    login(email, password)
      .then((response) => {
        // Promise가 resolve (성공) 되면 실행
        Alert.alert('로그인 성공', response.message);
        // TODO: 로그인 성공 시 다음 화면으로 이동하는 코드 (ex: navigation.navigate('Main'))
      })
      .catch((error) => {
        // Promise가 reject (실패) 되면 실행
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