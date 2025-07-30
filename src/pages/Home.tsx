// import { useSelector } from 'react-redux';

// import type { RootState } from '../store/store';
// import { getUsername } from '../store/slices/userSlice';

import { useUser } from '../context/UserContext';
import CreateUser from '../features/user/CreateUser';
import Button from '../components/ui/Button';

function Home() {
  // const username = useSelector((state: RootState) => state.user.username);
  // const username = useSelector(getUsername);
  const { username } = useUser();

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <div className="mt-10">
        {username ? (
          <Button to="/menu">Continue ordering, {username}</Button>
        ) : (
          <CreateUser />
        )}
      </div>
    </div>
  );
}

export default Home;
