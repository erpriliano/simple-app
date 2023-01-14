import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (user: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const contextValue = {
    isAuthenticated: isAuthenticated,
    login: (user: string, password: string) => {
      if (user === 'admin' && password === 'password') {
        setIsAuthenticated(true);
        navigate('/');
      } else {
        setIsAuthenticated(false);
        alert('Invalid credentials');
      }
    },
    logout: () => {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
