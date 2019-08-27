import React, { useState, useContext } from 'react';
import { LinkContext } from '../context/LinkContext';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1.3)
  }
}));

const AddLink = () => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('https://');
  const [links, setLinks] = useContext(LinkContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateUrl = e => {
    setUrl(e.target.value);
  };

  const addLink = e => {
    e.preventDefault();
    setLinks(prevLinks => [...prevLinks, { name: name, url: url }]);
    setName('');
    setUrl('https://');
  };

  return (
    <form onSubmit={addLink}>
      <TextField
        required
        type='text'
        name='name'
        value={name}
        onChange={updateName}
        id='outlined-required'
        label='Nimi'
        margin='dense'
        variant='outlined'
      />

      <TextField
        required
        type='text'
        name='url'
        value={url}
        onChange={updateUrl}
        id='outlined-required'
        label='Osoite (URL)'
        margin='dense'
        variant='outlined'
      />
      <Button
        className={classes.button}
        color='primary'
        type='submit'
        variant='outlined'
      >
        Lisää linkki
      </Button>
    </form>
  );
};

export default AddLink;
