import React from 'react';
import { Route, Routes } from 'react-router';
import Header from '../components/header';
// import RequireAuthRoute from '../components/require-auth-route'
// import RequireUnauthRoute from '../components/require-unauth-route'
import SignInPage from '../pages/sign-in'

const App = () => (
  <Routes>
    <div>
      <Header />
      {/* <Route element={<Header />} /> */}
      {/* <Route path='/' element={<SignInPage />} /> */}
      {/* <RequireAuthRoute /> */}
      {/* <RequireUnauthRoute authenticated={true} /> */}
    </div>
  </Routes>

);


export default App;

