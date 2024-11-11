'use client';

import { useRef, useEffect } from 'react';

export default function WebcamStream() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function setupWebcam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('웹캠 접근 오류:', error);
      }
    }

    setupWebcam();

    // 컴포넌트 언마운트 시 웹캠 스트림 정리
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative h-64 w-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="h-full w-full rounded-lg object-cover"
      />
      <div className="absolute bottom-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
        실시간
      </div>
    </div>
  );
}