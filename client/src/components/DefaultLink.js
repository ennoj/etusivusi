import React from 'react';

import Grid from '@material-ui/core/Grid';

const DefaultLink = props => {
  return (
    <Grid item>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <img style={{ height: '70px' }} src={props.img} alt={props.name} />
      </a>
    </Grid>
  );
};

export default DefaultLink;
