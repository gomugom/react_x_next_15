import {ReactNode} from "react";
// @가 src 폴더를 의미함
import styles from '@/app/page.module.css';

type Props = {children: ReactNode, modal: ReactNode};

/*
    @modal 폴더랑 레이아웃이 같은폴더에 있어야 modal을 사용할 수 있음
    따라서 (beforeLogin) 폴더에도 layout.tsx를 만들고
    기존 src/app/page.tsx 파일을 (beforeLogin)폴더로 옮김 => () 소괄호 폴더는 경로로 안잡히기 때문에
    루트 경로가 (beforeLogin)/page.tsx 가 뜨게 됨 
    => 이때, layout.tsx에 modal을 같이 뜨도록 해놓았음으로 루트 접속시 같이 뜨게 됨
* */
export default function Layout({children, modal} : Props) {
    return (
        <div className={styles.container}>
            비포로그인 레이아웃
            {children}
            {modal}
        </div>
    );
}