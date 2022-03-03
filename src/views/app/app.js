import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
// import RequireAuthRoute from '../components/require-auth-route'
// import RequireUnauthRoute from '../components/require-unauth-route'
import SignInPage from '../pages/sign-in/sign-in-page'
import '../pages/sign-in/sign-in-page.css'
import 'normalize.css/normalize.css';
import "@blueprintjs/core/lib/css/blueprint.css"
// import { TasksPage } from '../pages/tasks/tasks-page'

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<SignInPage />} />
        {/* <Route path='/login' element={TasksPage} /> */}
        {/* <RequireAuthRoute /> 
    //   <RequireUnauthRoute authenticated={true} /> */}

      </Routes>
    </>
  )
};


export default App;

