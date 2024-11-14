'use client';

import DashboardContent from '@/components/dashboard/DashboardContent';

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">대시보드</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          실시간 사고 분석 현황을 확인할 수 있습니다.
        </p>
      </div>
      <DashboardContent />
    </div>
  );
}