'use client';

export default function AnalysisPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">사고 분석</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          상세한 사고 분석 및 결과를 확인할 수 있습니다.
        </p>
      </div>

      {/* 분석 필터 섹션 */}
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="분석 내역 검색..."
          className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800"
        />
        <select className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600 dark:bg-gray-800">
          <option value="">모든 상태</option>
          <option value="pending">분석 중</option>
          <option value="completed">완료</option>
        </select>
      </div>

      {/* 상세 분석 목록 */}
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  분석 ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  사고 유형
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  위치
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  분석 상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  상세보기
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* 예시 데이터 */}
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                  #A001
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                  추돌 사고
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                  서울시 강남구
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    완료
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <button className="text-primary hover:text-primary-dark">
                    상세보기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}