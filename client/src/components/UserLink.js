import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: '10px 5px'
  }
}));

const handleClick = () => {
  alert('Tämä tulee avaamaan linkin valmiissa tuotteessa.');
};

const handleDelete = () => {
  alert('Tämä tulee poistamaan linkin valmiissa tuotteessa.');
};

const UserLink = props => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.chip}
      color='primary'
      icon={<LinkIcon />}
      label={props.name}
      onClick={handleClick}
      onDelete={handleDelete}
    />
  );
};

export default UserLink;
