import AuthLayout from '@/components/auth/AuthLayout';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AuthLayout 컴포넌트를 그대로 사용하고 children을 전달
  return <AuthLayout>{children}</AuthLayout>;
}