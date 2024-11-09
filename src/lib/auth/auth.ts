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