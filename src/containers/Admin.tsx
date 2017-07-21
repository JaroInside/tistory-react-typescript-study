import * as React from 'react';
import { Redirect } from 'react-router-dom';

const Admin = () => {
  const auth = false;
  return auth ?
    <h1>Admin페이지</h1> :
    <Redirect to="/" />;
};

export default Admin;