import { UserState } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// const useUserStore = create();

const useUserStore = create(persist<UserState>((set, /* get */) => ({
  user: null, // 로그인한 사용자의 정보를 저장(속성은 상태가 된다.)
  setUser: (user) => set({ user }), // 로그인 시 호출(메서드는 액션이 된다.)
  resetUser: () => set({ user: null }), // 로그아웃 시 호출(메서드는 액션이 된다.)
}), {
  name: 'user', // 스토리지에 저장할 key
  storage: createJSONStorage(() => sessionStorage), // 기본이 local storage를 사용하지만 여기서는 session storage로 지정
}));

export default useUserStore;