// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // 추가 설정 (예: 데이터베이스 연동, 콜백 함수)은 여기에...
})

export { handler as GET, handler as POST }