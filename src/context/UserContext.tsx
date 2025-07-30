import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

interface IUserContext {
  username: string;
  setUsername: (username: string) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

function UserProvider({ children }: PropsWithChildren) {
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// eslint-disable-next-line
export { UserProvider, useUser };
