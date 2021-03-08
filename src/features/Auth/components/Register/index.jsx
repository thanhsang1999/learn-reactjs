import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  function handleOnSubmit(values) {
    console.log('Register', values);
  }
  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Register;
