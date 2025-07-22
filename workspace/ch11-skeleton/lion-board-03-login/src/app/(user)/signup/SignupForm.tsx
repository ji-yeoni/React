import Link from "next/link";

export default function SignupForm() {
  return (
    <form action="/">
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
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">이름은 필수입니다.</p>
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
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
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
        <p className="mt-1 ml-2 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
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
        <button type="submit" className="px-4 py-1 ml-2 text-base font-semibold text-white bg-orange-500 rounded hover:bg-amber-400">회원가입</button>
        <Link href="/" className="px-4 py-1 ml-2 text-base font-semibold text-white bg-gray-900 rounded hover:bg-amber-400">취소</Link>
      </div>
    </form>    
  );
}