import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/inputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const schema = yup.object().shape({
    title: yup.string().required('Please input ').min(5, 'input to short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
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
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <InputField name="title" label="Todo" form={form} />
      </form>
    </div>
  );
}

export default TodoForm;
