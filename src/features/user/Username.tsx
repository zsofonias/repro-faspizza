// import { useSelector } from 'react-redux';
// import { getUsername } from '../../store/slices/userSlice';
// import type { RootState } from '../../store/store';
import { useUser } from '../../context/UserContext';

function Username() {
  // const username = useSelector((state: RootState) => state.user.username);
  // const username = useSelector(getUsername);
  const { username } = useUser();

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
export default Username;
