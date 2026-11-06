import { HeaderStyled, PageNameStyled } from "./Header.styled.tsx";

function Header({ name }: { name: string }) {
  return (
    <HeaderStyled>
      <PageNameStyled>{name}</PageNameStyled>
    </HeaderStyled>
  );
}

export default Header;
