// app/dashboard/page.tsx
import Link from 'next/link';
import './dashboard.css'; // 전용 CSS 파일을 가져옵니다.

// 데이터베이스에서 가져왔다고 가정한 목업(mock) 데이터
const mockProjects = [
  { id: '1', name: 'Codepolis-UI', language: 'TypeScript', lastAnalyzed: '2 hours ago', thumbnailUrl: '/images/city-thumb-1.webp' },
  { id: '2', name: 'Project-Kronos', language: 'Python', lastAnalyzed: '1 day ago', thumbnailUrl: '/images/city-thumb-2.webp' },
  { id: '3', name: 'Personal-Website-V2', language: 'React', lastAnalyzed: '5 days ago', thumbnailUrl: '/images/city-thumb-3.webp' },
  // ... 더 많은 프로젝트들
];

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* 헤더는 layout.tsx에서 공통으로 관리할 수 있습니다. */}
      <header className="dashboard-header">
        <h1>나의 도시들</h1>
        <div className="search-filter-container">
          <input type="text" placeholder="도시 이름 검색..." className="search-input" />
          {/* 필터 기능은 나중에 추가 */}
        </div>
      </header>

      <main className="dashboard-main">
        {/* 사용자가 요청한 '새 도시 건설' (프로젝트 등록) 버튼 */}
        <Link href="/register-project" className="new-city-card">
          <div className="plus-icon">+</div>
          <h2>새 도시 건설하기</h2>
          <p>새로운 GitHub Repository를 분석합니다.</p>
        </Link>

        {/* 기존 프로젝트 목록을 동적으로 렌더링 */}
        {mockProjects.map(project => (
          <Link href={`/city/${project.id}`} key={project.id} className="project-card">
            <div className="card-thumbnail" style={{ backgroundImage: `url(${project.thumbnailUrl})` }}></div>
            <div className="card-content">
              <h3>{project.name}</h3>
              <div className="card-meta">
                <span className={`language-tag ${project.language.toLowerCase()}`}>{project.language}</span>
                <span className="last-analyzed">Last analyzed: {project.lastAnalyzed}</span>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}