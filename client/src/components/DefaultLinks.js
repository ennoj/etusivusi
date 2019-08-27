import React, { useState } from 'react';

import DefaultLink from './DefaultLink';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import aliexpressImg from '../img/ae.jpg';
import areenaImg from '../img/areena.jpg';
import ebayImg from '../img/ebay.png';
import etuoviImg from '../img/etuovi.jpeg';
import facebookImg from '../img/fb.png';
import helsinginsanomatImg from '../img/hs.jpg';
import instagramImg from '../img/ig.png';
import iltalehtiImg from '../img/il.jpg';
import iltasanomatImg from '../img/is.png';
import mtvImg from '../img/mtv.png';
import mtvuutisetImg from '../img/mtv-uutiset.jpg';
import nettiautoImg from '../img/na.jpg';
import oikotieImg from '../img/oikotie.jpg';
import pintrestImg from '../img/pint.jpg';
import redditImg from '../img/reddit.png';
import rantapalloImg from '../img/rp.jpg';
import ruutuImg from '../img/ruutu.jpg';
import s24Img from '../img/s24.jpg';
import telkkuImg from '../img/telkku.jpg';
import telegramImg from '../img/tg.png';
import toriImg from '../img/tori.png';
import twitterImg from '../img/twitter.png';
import uusisuomiImg from '../img/us.png';
import whatsappImg from '../img/wa.png';
import vauvaImg from '../img/vauva.jpg';
import yleImg from '../img/yle.png';
import youtubeImg from '../img/yt.png';

const useStyles = makeStyles({
  title: {
    marginTop: '2vh'
  }
});

const DefaultLinks = () => {
  const classes = useStyles();

  ///// UUTISET /////
  const [newsLinks] = useState([
    {
      name: 'Iltasanomat',
      url: 'https://www.is.fi/',
      img: iltasanomatImg
    },
    {
      name: 'Iltalehti',
      url: 'https://www.iltalehti.fi/',
      img: iltalehtiImg
    },
    {
      name: 'Helsingin Sanomat',
      url: 'https://www.hs.fi/',
      img: helsinginsanomatImg
    },
    {
      name: 'Yle Uutiset',
      url: 'https://yle.fi/',
      img: yleImg
    },
    {
      name: 'MTV Uutiset',
      url: 'https://www.mtv.fi/uutiset',
      img: mtvuutisetImg
    },
    {
      name: 'Uusisuomi',
      url: 'https://www.uusisuomi.fi/',
      img: uusisuomiImg
    }
  ]);

  ///// SOME /////
  const [someLinks] = useState([
    {
      name: 'Facebook',
      url: 'https://facebook.com/',
      img: facebookImg
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      img: youtubeImg
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/',
      img: redditImg
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/?hl=fi',
      img: instagramImg
    },
    {
      name: 'WhatsApp',
      url: 'https://web.whatsapp.com/',
      img: whatsappImg
    },
    {
      name: 'Telegram',
      url: 'https://web.telegram.org/',
      img: telegramImg
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      img: twitterImg
    },
    {
      name: 'Pintrest',
      url: 'https://fi.pinterest.com/',
      img: pintrestImg
    },
    {
      name: 'Suomi24',
      url: 'https://www.suomi24.fi/',
      img: s24Img
    },
    {
      name: 'Vauva',
      url: 'https://www.vauva.fi/',
      img: vauvaImg
    }
  ]);

  ///// NETTI-TV /////
  const [tvLinks] = useState([
    {
      name: 'Telkku',
      url: 'https://www.telkku.com/',
      img: telkkuImg
    },
    {
      name: 'Yle Areena',
      url: 'https://areena.yle.fi/tv',
      img: areenaImg
    },
    {
      name: 'MTV',
      url: 'https://www.mtv.fi/',
      img: mtvImg
    },
    {
      name: 'Ruutu',
      url: 'https://www.ruutu.fi/kanavat',
      img: ruutuImg
    }
  ]);

  ///// OSTOKSET /////
  const [shoppingLinks] = useState([
    {
      name: 'Tori',
      url: 'https://www.tori.fi/',
      img: toriImg
    },
    {
      name: 'Etuovi',
      url: 'https://www.etuovi.com/',
      img: etuoviImg
    },
    {
      name: 'Oikotie',
      url: 'https://www.oikotie.fi/',
      img: oikotieImg
    },
    {
      name: 'Nettiauto',
      url: 'https://www.nettiauto.com/',
      img: nettiautoImg
    },
    {
      name: 'Rantapallo',
      url: 'https://www.rantapallo.fi/',
      img: rantapalloImg
    },
    {
      name: 'Ebay',
      url: 'https://www.ebay.com/',
      img: ebayImg
    },
    {
      name: 'AliExpress',
      url: 'https://www.aliexpress.com/',
      img: aliexpressImg
    }
  ]);

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
        {newsLinks.map(link => (
          <DefaultLink url={link.url} img={link.img} name={link.name} />
        ))}
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
        {someLinks.map(link => (
          <DefaultLink url={link.url} img={link.img} name={link.name} />
        ))}
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
        {tvLinks.map(link => (
          <DefaultLink url={link.url} img={link.img} name={link.name} />
        ))}
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
        {shoppingLinks.map(link => (
          <DefaultLink url={link.url} img={link.img} name={link.name} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DefaultLinks;
