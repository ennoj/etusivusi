import React, { useState } from 'react';

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
  email: '',
  password: ''
};

const Login = ({ loginUser }) => {
  const classes = useStyles();
  const [loginFields, setLoginFields] = useState(emptyFields);

  const { email, password } = loginFields;

  const onChange = e => {
    setLoginFields({ ...loginFields, [e.target.name]: e.target.value });
  };

  const onLogin = e => {
    e.preventDefault();
    if (email.length < 3 || password.length < 6) {
      alert('Täytä vaaditut kentät oikein.');
    } else {
      loginUser(loginFields);
      setLoginFields(emptyFields);
    }
  };

  return (
    <>
      <form onSubmit={onLogin} method='post'>
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

        <Button
          className={classes.button}
          color='primary'
          type='submit'
          variant='outlined'
        >
          Kirjaudu
        </Button>
      </form>
    </>
  );
};

export default Login;
