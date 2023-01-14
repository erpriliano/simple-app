import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login(loginInfo.username, loginInfo.password);
  };

  return (
    <div
      style={{
        margin: 'auto',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#ede7e6',
          width: '40%',
          borderRadius: '10px',
          padding: '10px 16px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <hr />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '12px',
          }}
        >
          <label
            style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}
            htmlFor='username'
          >
            Username
          </label>
          <input
            style={{ borderRadius: '5px', padding: '4px' }}
            type='text'
            name='username'
            id='username'
            placeholder='Enter your username'
            value={loginInfo.username}
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, username: e.target.value }))
            }
            onBlur={(e) =>
              setLoginInfo((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '12px',
          }}
        >
          <label
            style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}
            htmlFor='password'
          >
            Password
          </label>
          <input
            style={{ borderRadius: '5px', padding: '4px' }}
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
            }
            onBlur={(e) =>
              setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant='primary'
            style={{ width: '100px', margin: '14px auto' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
