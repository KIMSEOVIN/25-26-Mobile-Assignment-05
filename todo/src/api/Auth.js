
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
    
      if (email === 'seovinkim832@gmail.com' && password === '1234') {
       
        resolve({
          success: true,
          userId: 1,
          email: email,
          message: '로그인 성공!',
        });
      } else {
       
        reject(new Error('이메일 또는 비밀번호가 틀렸습니다.'));
      }
    }, 2000); 
  });
};