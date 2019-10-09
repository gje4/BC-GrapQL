import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles data-test="nav">
    <Link href="/items">
      <a>Shop</a>
    </Link>
  </NavStyles>
);

export default Nav;
