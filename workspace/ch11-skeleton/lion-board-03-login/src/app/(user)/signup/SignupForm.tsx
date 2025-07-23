'use client';

import { createUser } from "@/data/actions/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function SignupForm() {

  // 서버 액션 호출
  const [ state, formAction, isLoading ] = useActionState(createUser, null);

  const router = useRouter();

  useEffect(() => {
    if(state?.ok){
      alert('회원 가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      router.replace('/login');
    }else if(state?.ok === 0 && !state?.errors){ // 입력값 검증에러가 아닌 경우
      alert(state?.message);
    }
  }, [state]);

  return (
    <form action={ formAction }>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          placeholder="이름을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          name="name"
        />
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">{ state?.ok === 0 && state.errors?.name?.msg }</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          placeholder="이메일을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          name="email"
        />
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">{ state?.ok === 0 && state.errors?.email?.msg }</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          autoComplete="new-password"
          placeholder="비밀번호를 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          name="password"
        />
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">{ state?.ok === 0 && state.errors?.password?.msg }</p>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-200" htmlFor="attach">프로필 이미지</label>
        <input
          type="file"
          id="attach"
          accept="image/*"
          placeholder="이미지를 선택하세요"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
          name="attach"
        />
      </div>

      <div className="flex items-center justify-center mt-10">
        <button disabled={ isLoading } type="submit" className="px-4 py-1 ml-2 text-base font-semibold text-white bg-orange-500 rounded hover:bg-amber-400">회원가입</button>
        <Link href="/" className="px-4 py-1 ml-2 text-base font-semibold text-white bg-gray-900 rounded hover:bg-amber-400">취소</Link>
      </div>
    </form>
  );
}