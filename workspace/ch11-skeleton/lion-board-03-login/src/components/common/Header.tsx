'use client';

import useUserStore from "@/zustand/userStore";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { user, resetUser } = useUserStore();

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    resetUser();
    alert('로그아웃 되었습니다.');
  };

  return (
    <header className="px-8 text-gray-800 duration-500 ease-in-out min-w-80 bg-slate-100 dark:bg-gray-600 dark:text-gray-200 transition-color">
      <nav className="flex flex-wrap items-center justify-center p-4 md:flex-nowrap md:justify-between">
        <div className="order-1 w-1/2 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image className="w-auto h-6 mr-3 sm:h-9" src="/images/favicon.svg" width="24" height="24" alt="로고 이미지" />
            <span className="text-lg font-bold">라이언 보드 v.03-login</span>
          </Link>
        </div>
        <div className="order-2 w-auto mt-4 text-base md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
            <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
            <li className="hover:text-amber-500 hover:font-semibold"><Link href="/qna">질문게시판</Link></li>
          </ul>
        </div>

        <div className="flex items-center justify-end order-1 w-1/2 md:order-2 md:w-auto">

          { user ? (
            <form onSubmit={ handleLogout }>
              <p className="flex items-center">
                <Image 
                  className="w-8 mr-2 rounded-full" 
                  src={ user.image ? `https://fesp-api.koyeb.app/market/${user.image}` : `/images/front-end.png` }
                  width="32"
                  height="32"
                  alt={`${user.name} 프로필 이미지`} />
                {user.name} 님 :)
                <button type="submit" className="px-2 py-1 ml-2 text-sm font-semibold text-white bg-gray-900 rounded hover:bg-amber-400">로그아웃</button>
              </p>
            </form>
          ) : (
            <div className="flex justify-end">
              <Link href="/login" className="px-2 py-1 ml-2 text-sm font-semibold text-white bg-orange-500 rounded hover:bg-amber-400">로그인</Link>
              <Link href="/signup" className="px-2 py-1 ml-2 text-sm font-semibold text-white bg-gray-900 rounded hover:bg-amber-400">회원가입</Link>
            </div>
          ) }

          <button
            type="button"
            data-toggle-dark="dark"
            className="flex items-center justify-center w-8 h-8 ml-4 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              data-toggle-icon="moon"
              className="w-3.5 h-3.5 hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg
              data-toggle-icon="sun"
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
            <span className="sr-only">Toggle dark/light mode</span>
          </button>

        </div>
      </nav>
    </header>
  );
}