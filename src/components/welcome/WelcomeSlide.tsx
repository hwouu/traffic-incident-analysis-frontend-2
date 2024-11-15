'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import SlideContent from './SlideContent';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function WelcomeSlide() {
  const slides = [
    {
      title: '교통사고 분석 시스템',
      description: '인공지능 기반의 실시간 교통사고 분석과 신고 시스템을 경험해보세요.',
      image: '/images/slides/slide1.svg',
    },
    {
      title: '신속한 사고 대응',
      description: '사고 발생 시 빠른 분석과 보고서 생성으로 신속한 대응이 가능합니다.',
      image: '/images/slides/slide2.svg',
    },
    {
      title: '지금 시작하기',
      description: '로그인하여 서비스를 이용해보세요.',
      image: '/images/slides/slide3.svg',
    },
  ];

  return (
    <div className="relative h-full w-full">
      {/* Logo 추가 - 크기를 xl로 변경 */}
      <div className="absolute left-6 top-6 z-50">
        <Logo variant="with-text" size="xl" />
      </div>

      <Swiper
        modules={[Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="bg-background transition-colors dark:bg-dark-background"
          >
            <SlideContent title={slide.title} description={slide.description} image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
