// app/login/page.tsx
'use client'; // 이 파일을 클라이언트 컴포넌트로 만듭니다.
import './login.css'; // 로그인 페이지 전용 CSS 파일을 import합니다.
import { signIn } from 'next-auth/react'; // signIn 함수를 import 합니다.
import Link from 'next/link';

export default function LoginPage() {
    return (

        <div className="login-page-container">
            <header className="header">
                <Link href="/" className="logo">CodePolis</Link>
            </header>
            <div className="login-container">
                <div className="login-box">
                    <div className="logo">CodePolis</div>
                    <h2>코드폴리스에 오신 것을 환영합니다.</h2>
                    <p>GitHub 계정으로 간편하게 로그인하세요.</p>
                    <div className="github-logo"></div>

                    {/* 이 버튼을 누르면 실제 GitHub 인증 과정이 시작됩니다. */}
                    <button className="github-login-button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
                        {/* GitHub 로고 SVG나 이미지를 넣으면 좋습니다. */}
                        GitHub로 로그인하기
                    </button>

                    <p className="terms-text">
                        로그인 시 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하는 것으로 간주합니다.
                    </p>
                </div>
            </div>
        </div>
    );
}