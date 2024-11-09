'use client';

import { useState, useRef } from 'react';
import { Send, Paperclip, Camera } from 'lucide-react';
import MediaUpload from './MediaUpload';
import WebcamStream from './WebcamStream';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [showMediaUpload, setShowMediaUpload] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 사용자 메시지 추가
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // 더미 봇 응답 (추후 API 연동)
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: '사고 분석을 위해 현장 사진이나 영상을 제공해주시겠어요?',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      scrollToBottom();
    }, 1000);
  };

  return (
    <div className="flex h-full flex-col">
      {/* 미디어 컨트롤 */}
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowMediaUpload(true)}
            className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <Paperclip className="h-4 w-4" />
            <span>미디어 업로드</span>
          </button>
          <button
            onClick={() => setIsWebcamActive(!isWebcamActive)}
            className={`flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium ${
              isWebcamActive 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Camera className="h-4 w-4" />
            <span>웹캠 {isWebcamActive ? '끄기' : '켜기'}</span>
          </button>
        </div>
      </div>

      {/* 웹캠 스트림 */}
      {isWebcamActive && <WebcamStream />}

      {/* 채팅 메시지 */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 ${
                message.type === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 입력 폼 */}
      <form onSubmit={handleSend} className="border-t border-gray-200 p-4 dark:border-gray-700">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {/* 미디어 업로드 모달 */}
      {showMediaUpload && (
        <MediaUpload onClose={() => setShowMediaUpload(false)} />
      )}
    </div>
  );
}