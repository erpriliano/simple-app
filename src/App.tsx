import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { JobList, JobDetails, Login } from './pages';
import { AuthContextProvider } from './context/AuthContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<JobList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/details/:id' element={<JobDetails />} />
          <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
