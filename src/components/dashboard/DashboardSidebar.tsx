'use client';

import { Home, FileText, PlusCircle, History, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [isUser] = useState(true); // TODO: 실제 사용자 타입에 따라 변경

  const userMenuItems = [
    { icon: Home, label: '대시보드', href: '/user-dashboard' },
    { icon: PlusCircle, label: '신고하기', href: '/user-dashboard/report' },
    { icon: History, label: '신고 내역', href: '/user-dashboard/history' },
  ];

  const adminMenuItems = [
    { icon: Home, label: '대시보드', href: '/admin-dashboard' },
    { icon: PlusCircle, label: '사고 등록', href: '/admin-dashboard/register' },
    { icon: FileText, label: '보고서 관리', href: '/admin-dashboard/reports' },
  ];

  const menuItems = isUser ? userMenuItems : adminMenuItems;

  return (
    <aside className="w-64 bg-white shadow-md dark:bg-gray-800">
      <div className="flex h-full flex-col">
        {/* 로고 영역 */}
        <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold text-primary">Traffic Analysis</span>
        </div>

        {/* 메뉴 항목들 */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* 로그아웃 버튼 */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <button
            onClick={() => {
              // TODO: 로그아웃 처리
            }}
            className="flex w-full items-center space-x-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5" />
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </aside>
  );
}