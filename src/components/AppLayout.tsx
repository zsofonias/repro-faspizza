import { Outlet, useNavigation } from 'react-router';

import { UserProvider } from '../context/UserContext';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loading from './ui/Loading';

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <UserProvider>
      <div className="grid h-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loading />}
        <Header />
        <div className="overflow-auto">
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>
        <CartOverview />
      </div>
    </UserProvider>
  );
}
export default AppLayout;
