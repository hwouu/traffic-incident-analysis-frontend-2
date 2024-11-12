import Cookies from 'js-cookie';

interface Credentials {
  id: string;
  password: string;
}

// 더미 사용자 데이터
const DUMMY_USER = {
  id: 'master',
  password: '1234',
};

export const authenticateUser = (credentials: Credentials): boolean => {
  return credentials.id === DUMMY_USER.id && credentials.password === DUMMY_USER.password;
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