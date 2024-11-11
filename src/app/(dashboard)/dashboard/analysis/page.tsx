'use client';

export default function AnalysisPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">사고 분석 현황</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          실시간 사고 분석 현황을 확인할 수 있습니다.
        </p>
      </div>

      {/* 분석 통계 카드 */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">오늘의 분석 건수</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">12</p>
          <p className="mt-1 text-sm text-green-600">↑ 전일 대비 2건 증가</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">평균 분석 시간</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">5.2분</p>
          <p className="mt-1 text-sm text-green-600">↓ 전일 대비 0.3분 감소</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">정확도</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">98.5%</p>
          <p className="mt-1 text-sm text-green-600">↑ 전일 대비 0.5% 향상</p>
        </div>
      </div>

      {/* 최근 분석 목록 */}
      <div className="mt-6 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">최근 분석 목록</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  분석 ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  분석 시간
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  사고 유형
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  상태
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                    #A{String(i).padStart(4, '0')}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {new Date().toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                    추돌 사고
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      완료
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}