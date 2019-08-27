import React, { useContext } from 'react';

import { LinkContext } from '../context/LinkContext';
import DefaultLink from './DefaultLink';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  title: {
    marginTop: '2vh'
  }
});

const DefaultLinks = () => {
  const classes = useStyles();
  const [links] = useContext(LinkContext);

  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Typography className={classes.title} variant='h5'>
        Uutiset
      </Typography>
      <hr />

      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={3}
      >
        {links.map(link => {
          if (link.category === 'news') {
            return (
              <DefaultLink
                url={link.url}
                img={link.img}
                name={link.name}
                key={link.name}
              />
            );
          } else {
            return null;
          }
        })}
      </Grid>

      <Typography className={classes.title} variant='h5'>
        Some
      </Typography>
      <hr />

      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={3}
      >
        {links.map(link => {
          if (link.category === 'some') {
            return (
              <DefaultLink
                url={link.url}
                img={link.img}
                name={link.name}
                key={link.name}
              />
            );
          } else {
            return null;
          }
        })}
      </Grid>

      <Typography className={classes.title} variant='h5'>
        Netti-TV
      </Typography>
      <hr />

      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={3}
      >
        {links.map(link => {
          if (link.category === 'tv') {
            return (
              <DefaultLink
                url={link.url}
                img={link.img}
                name={link.name}
                key={link.name}
              />
            );
          } else {
            return null;
          }
        })}
      </Grid>

      <Typography className={classes.title} variant='h5'>
        Ostokset
      </Typography>
      <hr />

      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={3}
      >
        {links.map(link => {
          if (link.category === 'shopping') {
            return (
              <DefaultLink
                url={link.url}
                img={link.img}
                name={link.name}
                key={link.name}
              />
            );
          } else {
            return null;
          }
        })}
      </Grid>
    </Grid>
  );
};

export default DefaultLinks;
