'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <div className="space-y-6 p-6">
      <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800">
        <div className="border-b border-gray-200 p-6 dark:border-gray-700">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">신고 내역</h1>
            
            <div className="flex space-x-4">
              {/* 검색 */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* 필터 */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="all">전체</option>
                <option value="pending">처리 중</option>
                <option value="completed">완료</option>
                <option value="urgent">긴급</option>
              </select>
            </div>
          </div>
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
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  처리 결과
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  보고서
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
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    완료
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                  경미한 사고로 판단
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <button className="text-primary hover:text-primary-dark">
                    보고서 보기
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

          {/* 페이지네이션 */}
          <div className="flex items-center justify-between border-t border-gray-200 px-6 py-3 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                총 <span className="font-medium">20</span> 건
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="rounded-md border border-gray-300 px-3 py-1 text-sm dark:border-gray-600">
                이전
              </button>
              <button className="rounded-md bg-primary px-3 py-1 text-sm text-white">1</button>
              <button className="rounded-md border border-gray-300 px-3 py-1 text-sm dark:border-gray-600">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}