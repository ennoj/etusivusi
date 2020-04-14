import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    width: '50%',
    margin: '20px 0'
  },
  field: {
    width: '50%',
    margin: '6px 0'
  }
}));

const emptyFields = {
  name: '',
  email: '',
  password: '',
  password2: ''
};

const Register = ({ addUser }) => {
  const classes = useStyles();
  const [newUser, setNewUser] = useState(emptyFields);

  const { name, email, password, password2 } = newUser;

  const onChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onRegister = e => {
    e.preventDefault();
    if (
      name.length < 3 ||
      email.length < 3 ||
      password.length < 6 ||
      password2.length < 6
    ) {
      alert('Täytä vaaditut kentät');
    } else {
      addUser(newUser);
      setNewUser(emptyFields);
      return <Redirect to='/login' />;
    }
  };

  return (
    <>
      <form onSubmit={onRegister} method='post'>
        <TextField
          className={classes.field}
          required
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          label='Nimi'
          margin='dense'
          variant='outlined'
        />
        <TextField
          className={classes.field}
          required
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='Sähköposti'
          margin='dense'
          variant='outlined'
        />
        <TextField
          className={classes.field}
          required
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='Salasana'
          margin='dense'
          variant='outlined'
        />
        <TextField
          className={classes.field}
          required
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          label='Salasana uudestaan'
          margin='dense'
          variant='outlined'
        />

        <Button
          className={classes.button}
          color='primary'
          type='submit'
          variant='outlined'
        >
          Rekisteröidy
        </Button>
      </form>
    </>
  );
};

export default Register;
