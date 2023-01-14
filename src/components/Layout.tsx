import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <React.Fragment>
      <Navbar
        bg='dark'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 25px',
        }}
      >
        <div>
          <Navbar.Brand style={{ color: 'white' }}>GitHub Jobs</Navbar.Brand>
        </div>
        <div>
          {isAuthenticated && (<Button variant='danger' onClick={handleLogout}>Logout</Button>)}
        </div>
      </Navbar>
      <main style={{ padding: '10px 25px' }}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
