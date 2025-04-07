import {redirect} from "next/navigation";

/*
    /(beforeLogin)/pages.tsx 에서
    /login 링크 클릭시 해당페이지에서
    /i/flow/login 페이지로 리다이랙트 시킴
* */
export default function Login() {
    redirect("/i/flow/login");
}