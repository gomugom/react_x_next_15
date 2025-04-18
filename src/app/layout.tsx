import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/*
  src/app/layout.tsx => 이게 최상위 부모 "레이아웃"
  {children} 부분에 src/app/page.tsx가 들어가게 됨
  
  src/app 하위 폴더경로가 패스 자체가 됨
  [폴더명] => 으로 만들면 동적으로 할당이 가능함 패스를

  각 폴더 경로에 page.tsx가 해당경로의 페이지가 된다.
  root/i/flow 주소면 => src/app/i/flow/page.tsx

  (폴더명) => 소괄호로 묶인 폴더는 브라우저 주소에 영향을 주지 않음
  : 즉, 라우팅 그룹역할 
  : 실재로 브라우저 주소에 보이진 않지만 라우팅을 그룹핑해줌
  ex) (beforeLogin)
   => src/app/(beforeLogin)/home => /home
* */

type Props = {
  children: React.ReactNode
};
export default function RootLayout({
  children
}: Props) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
