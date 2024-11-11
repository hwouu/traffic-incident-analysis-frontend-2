'use client';

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">사고 분석 보고서</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          생성된 사고 분석 보고서를 확인할 수 있습니다.
        </p>
      </div>

      {/* 보고서 필터 */}
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="보고서 검색..."
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800"
        />
        <select className="rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800">
          <option value="">모든 유형</option>
          <option value="collision">추돌 사고</option>
          <option value="scratch">접촉 사고</option>
          <option value="turnover">전복 사고</option>
        </select>
      </div>

      {/* 보고서 목록 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                보고서 #{String(i).padStart(4, '0')}
              </span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-400">
                완료
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              차량 {i}대 추돌 사고
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              서울시 강남구 테헤란로
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString()}
              </span>
              <button className="rounded-lg bg-primary px-3 py-1 text-sm text-white hover:bg-primary-dark">
                상세보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}