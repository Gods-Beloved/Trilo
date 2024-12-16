import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <HeaderNav />
    </header>
  );
}

export default Header;
