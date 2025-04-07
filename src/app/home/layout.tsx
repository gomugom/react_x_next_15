/*
    src/app/layout.tsx 안에
    /home 경로일때만 /home/layout.tsx가 root layout.tsx안에 위치됨

    src/app/layout.tsx > /home/layout.tsx > /home/page.tsx

    RootLayout -> HomeLayout -> Home
* */
export default async function HomeLayout({children}) {
    return(
        <div>{children}</div>
    );
}