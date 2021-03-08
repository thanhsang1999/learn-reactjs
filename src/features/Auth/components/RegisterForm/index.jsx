import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/inputField';
import InputFieldPassword from '../../../../components/form-controls/inputFieldPassword';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {},
  avatar: {},
  submit: {},
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const { onSubmit } = props;
  const schema = yup.object().shape({
    title: yup.string().required('Please input ').min(5, 'input to short'),
  });
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  function handleOnSubmit(values) {
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  }
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputFieldPassword name="password" label="Password" form={form} />
        <InputFieldPassword name="retypePassword" label="Retype Password" form={form} />
      </form>
    </div>
  );
}

export default RegisterForm;
