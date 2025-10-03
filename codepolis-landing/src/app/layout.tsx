import type { Metadata } from "next";
import "./globals.css"; // 전역 CSS 파일

// ✅ 여기에 metadata 객체를 추가하거나 수정합니다.
export const metadata: Metadata = {
  title: "코드폴리스 - 코드를 탐험하는 새로운 방법",
  description: "당신의 프로젝트를 3D 도시로 시각화하고 새로운 통찰을 얻으세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}