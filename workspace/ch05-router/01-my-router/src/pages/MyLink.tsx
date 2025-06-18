interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to}: MyLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본동작(페이지 이동) 취소
    e.preventDefault();

    //
    history.pushState(null, '', to);

    //
    //
    window.dispatchEvent(new PopStateEvent('popstate'));

  };
  return (
    <a href={to} onClick={handleClick}>{children}</a>
  );
}

export default MyLink;