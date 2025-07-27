import { Outlet, useNavigation } from 'react-router';

import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loading from './ui/Loading';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      {isLoading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
