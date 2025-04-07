/*
    라우터 그룹핑한 폴더도 그룹핑요소들끼리 관리할 수 있는
    layout.tsx를 만들 수 있다.
* */
export default function AfterLoginLayout({children}) {
    return(
        <div>
            애프터 로그인 레이아웃
            {children}
        </div>
    );
}