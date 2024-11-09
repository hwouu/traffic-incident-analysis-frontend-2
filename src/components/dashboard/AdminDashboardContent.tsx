'use client';

import { BarChart3, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function AdminDashboardContent() {
  return (
    <div className="space-y-6 p-6">
      {/* 통계 카드 */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">대기 중</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8건</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">긴급 처리</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3건</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">처리 완료</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">45건</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">전체 사용자</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">156명</p>
            </div>
          </div>
        </div>
      </div>

      {/* 월별 통계 차트 */}
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">월별 사고 통계</h2>
          <select className="rounded-md border border-gray-300 px-3 py-1 dark:border-gray-600 dark:bg-gray-700">
            <option>최근 6개월</option>
            <option>최근 1년</option>
          </select>
        </div>
        <div className="h-72">
          {/* TODO: 차트 컴포넌트 추가 */}
          <div className="flex h-full items-center justify-center">
            <BarChart3 className="h-24 w-24 text-gray-300 dark:text-gray-600" />
          </div>
        </div>
      </div>

      {/* 최근 신고 목록 */}
      <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800">
        <div className="border-b border-gray-200 p-6 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">최근 신고 목록</h2>
        </div>
        <div className="overflow-x-auto">
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
                  신고자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  긴급도
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  2024-11-08 15:30
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  서울시 강남구
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  홍길동
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    처리 중
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                    긴급
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}