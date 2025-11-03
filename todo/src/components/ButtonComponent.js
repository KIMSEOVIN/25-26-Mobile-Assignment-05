import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity 
      // --- 1. style을 배열로 변경 ---
      style={[
        styles.button, // 공통 스타일 (크기, 패딩 등)
        disabled ? styles.buttonDisabled : styles.buttonActive // 조건부 스타일 (색상)
      ]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // --- 2. 공통 스타일 (backgroundColor 제외) ---
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20, 
  },
  // --- 3. 활성화/비활성화 색상 분리 ---
  buttonActive: {
    backgroundColor: 'blue', 
  },
  buttonDisabled: {
    backgroundColor: '#B0C4DE', // (비활성화용 연한 파란색)
  },
  text: {
    color: 'white', 
    textAlign: 'center',
    fontSize: 16,
  }
});

export default ButtonComponent;