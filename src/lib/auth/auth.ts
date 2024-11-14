import Cookies from 'js-cookie';

interface Credentials {
  id: string;
  password: string;
}

// 더미 사용자 저장소 (배열 형태로 수정)
const DUMMY_USERS: Credentials[] = [
  { id: 'master', password: '1234' },
];

export const authenticateUser = (credentials: Credentials): boolean => {
  return DUMMY_USERS.some(
    (user) => user.id === credentials.id && user.password === credentials.password
  );
};

// 회원가입 함수
export const registerUser = (newUser: Credentials): boolean => {
  // 아이디가 이미 존재하는지 확인
  const userExists = DUMMY_USERS.some((user) => user.id === newUser.id);

  if (userExists) {
    console.error('User already exists');
    return false; // 사용자 중복
  }

  // 새로운 사용자 추가
  DUMMY_USERS.push(newUser);
  console.log('User registered:', newUser);
  return true;
};

export const logout = () => {
  try {
    // 쿠키 제거
    Cookies.remove('auth');
    // 로컬 스토리지 클리어 (필요한 경우)
    localStorage.clear();
    // 세션 스토리지 클리어 (필요한 경우)
    sessionStorage.clear();
    
    // 로그인 페이지로 리다이렉트
    window.location.href = '/login';
  } catch (error) {
    console.error('Logout failed:', error);
  }
};