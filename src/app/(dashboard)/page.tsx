'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  
  useEffect(() => {
    // TODO: 실제 사용자 타입 확인 로직 추가
    const userType = localStorage.getItem('userType') || 'user';
    
    if (userType === 'user') {
      router.replace('/user-dashboard');
    } else {
      router.replace('/admin-dashboard');
    }
  }, [router]);

  // 리다이렉트되는 동안 보여줄 로딩 상태
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-gray-600 dark:text-gray-400">로딩중...</p>
      </div>
    </div>
  );
}