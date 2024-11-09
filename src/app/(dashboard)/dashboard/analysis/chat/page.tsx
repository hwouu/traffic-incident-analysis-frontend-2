'use client';

import ChatInterface from '@/components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">사고 분석</h1>
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <ChatInterface />
      </div>
    </div>
  );
}