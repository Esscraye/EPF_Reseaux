import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Outlet, useNavigate
} from 'react-router-dom';
import PropTypes from 'prop-types';
import config from '../config';

import { Header, Footer } from './components';
import {
  Error404, Home, Login, PasswordForgotten, CreateArticle,
  AssoSuperAdmin, AssociationPage, CreateAssociations, ChangeProfile,
  GeneralProfile, MemberManagement, ShowProfile
} from './views';

function PrivateRoute({ children }) {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      let xsrfToken = sessionStorage.getItem('xsrfToken');

      if (xsrfToken && sessionStorage.getItem('token')) {
        xsrfToken = JSON.parse(xsrfToken);

        const headers = new Headers();
        headers.append('x-xsrf-token', xsrfToken);

        const options = {
          method: 'GET',
          mode: 'cors',
          headers,
          credentials: 'include',
          origin: config.IP_API
        };

        await fetch(`${config.IP_API}/checkToken`, options)
          .then((response) => {
            if (response.status === 200) {
              setAuth(true);
            } else {
              sessionStorage.removeItem('token');
              sessionStorage.removeItem('xsrfToken');
              setAuth(false);
            }
          })
          .catch((error) => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('xsrfToken');
            throw new Error(error);
          });
      } else {
        setAuth(false);
      }
    };
    checkToken();
  }, []);

  if (auth !== null) {
    if (auth) {
      return (<>{children}</>);
    }
    navigate('/login');
  }
  // return (<>{auth ? children : <Login />}</>);
}

function GeneralLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/password-forgot" element={<PasswordForgotten />} />
        <Route path="/login" element={<Login />} />
        <Route element={<GeneralLayout />}>
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route exact path="/profil" element={<PrivateRoute><ShowProfile /></PrivateRoute>} />
          <Route exact path="/assosSuperAdmin" element={<PrivateRoute><AssoSuperAdmin /></PrivateRoute>} />
          <Route exact path="/createArticle" element={<PrivateRoute><CreateArticle /></PrivateRoute>} />
          <Route exact path="/createAssos" element={<PrivateRoute><CreateAssociations /></PrivateRoute>} />
          <Route exact path="/gestMember" element={<PrivateRoute><MemberManagement /></PrivateRoute>} />
          <Route exact path="/association-page" element={<PrivateRoute><AssociationPage /></PrivateRoute>} />
          <Route exact path="/change-profile" element={<PrivateRoute><ChangeProfile /></PrivateRoute>} />
          <Route exact path="/general-profile" element={<PrivateRoute><GeneralProfile /></PrivateRoute>} />
        </Route>
        <Route
          path="*"
          element={(
            <PrivateRoute>
              <Error404 />
            </PrivateRoute>
          )}
        />
      </Routes>
    </Router>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
