import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputFieldPassword.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputFieldPassword(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  const hasErrors = errors[name] && formState.touched[name];
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      type="password"
      fullWidth
      label={label}
      error={hasErrors}
      helperText={hasErrors && errors[name].message}
    />
  );
}

export default InputFieldPassword;
