'use client';

import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function UserDashboardContent() {
  return (
    <div className="space-y-6 p-6">
      {/* 상태 카드 */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">처리 중</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2건</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">처리 완료</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">15건</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">긴급 처리 필요</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1건</p>
            </div>
          </div>
        </div>
      </div>

      {/* 최근 신고 내역 */}
      <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800">
        <div className="border-b border-gray-200 p-6 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">최근 신고 내역</h2>
        </div>
        <div className="p-6">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  신고 일시
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  위치
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  상태
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  2024-11-08 14:30
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  서울시 강남구
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    처리 중
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}