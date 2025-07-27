import { Link } from 'react-router';

import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to="/">FASPizza</Link>
      <SearchOrder />
      <p>Ray</p>
    </header>
  );
}
export default Header;
