// app/page.tsx
"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref 배열 생성

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // 보이는 요소에 'visible' 클래스 추가
            observer.unobserve(entry.target); // 한 번 보이면 관찰 중단
          }
        });
      },
      { threshold: 0.3 } // 뷰포트의 30%가 보이면 콜백 실행
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); // 각 기능 아이템 관찰
    });

    return () => {
      // 컴포넌트 언마운트 시 옵저버 정리
      const refs = featureRefs.current;
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
      <div className="landing-page-container">
        {/* 1. 헤더 영역 */}
        <header className="header">
          <div className="logo">CodePolis</div>
          <nav className="nav">
            <Link href="/login" className="nav-item">Login</Link> {/* 실제 로그인 페이지로 연결 */}
            {/* <a href="#" className="nav-item">Register</a> */} {/* 필요에 따라 추가 */}
          </nav>
        </header>

        {/* 2. 메인 히어로 섹션 */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>코드 탐험의 새로운 방법</h1>
            <h2>당신의 프로젝트를 3D 도시로 시각화하세요!</h2>
            <button className="cta-button">GitHub로 시작하기</button>
            {/* 데모 영상 재생 버튼 (선택 사항) */}
            <button className="demo-button">▶ 데모 영상 보기</button>
          </div>
          {/* 3D 배경 영상 또는 애니메이션이 들어갈 자리 */}
          <div className="background-3d-visual">
            {/* 이곳에 나중에 3D 도시 애니메이션이 들어갈 것입니다. */}
          </div>
        </section>

        {/* 3. 주요 기능 소개 섹션 (아래로 스크롤 시 나타남) */}
        <section className="features-section">
          <div ref={(el) => {featureRefs.current[0] = el}} className="feature-item fade-in">
            <h3>🏙️ 타임랩스 뷰</h3>
            <p>팀워크와 코드 변화의 역사를 시각적으로 경험하세요. 3D 도시의 발전 과정을 한눈에.</p>
          </div>
          <div ref={(el) => {featureRefs.current[1] = el}} className="feature-item fade-in">
            <h3>🔍 코드 품질 탐험</h3>
            <p>복잡도, 기술 부채, 버그 잠재성을 도시의 &apos;환경 오염도&apos;처럼 직관적으로 파악합니다.</p>
          </div>
          <div ref={(el) => {featureRefs.current[2] = el}} className="feature-item fade-in">
            <h3>🗺️ 코드 커뮤니티 지도</h3>
            <p>새로운 팀원이 빠르게 프로젝트에 적응하고, 시니어 개발자는 전체 구조를 조망합니다.</p>
          </div>
        </section>
        {/* 4. 푸터 영역 (간단한 정보) */}
        <footer className="footer">
          <p>&copy; 2025 CodePolis. All rights reserved.</p>
        </footer>
      </div>
  );
}