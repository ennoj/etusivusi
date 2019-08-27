import React, { useState, createContext } from 'react';

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

export const LinkContext = createContext();

export const LinkProvider = props => {
  ///// USER LINKS /////
  const [links, setLinks] = useState([
    {
      name: 'Espoon sää',
      url: 'https://www.esimerkki.com',
      category: 'user'
    },

    {
      name: 'Tonnikalapastan resepti',
      url: 'https://www.esimerkki.com',
      category: 'user'
    },

    {
      name: 'Hauska peli',
      url: 'https://www.esimerkki.com',
      category: 'user'
    },

    {
      name: 'React-videokurssi',
      url: 'https://www.esimerkki.com',
      category: 'user'
    },

    ///// DEFAULT LINKS /////

    ///// NEWS /////
    {
      name: 'Iltasanomat',
      url: 'https://www.is.fi/',
      img: iltasanomatImg,
      category: 'news'
    },
    {
      name: 'Iltalehti',
      url: 'https://www.iltalehti.fi/',
      img: iltalehtiImg,
      category: 'news'
    },
    {
      name: 'Helsingin Sanomat',
      url: 'https://www.hs.fi/',
      img: helsinginsanomatImg,
      category: 'news'
    },
    {
      name: 'Yle Uutiset',
      url: 'https://yle.fi/',
      img: yleImg,
      category: 'news'
    },
    {
      name: 'MTV Uutiset',
      url: 'https://www.mtv.fi/uutiset',
      img: mtvuutisetImg,
      category: 'news'
    },
    {
      name: 'Uusisuomi',
      url: 'https://www.uusisuomi.fi/',
      img: uusisuomiImg,
      category: 'news'
    },

    ///// SOME /////
    {
      name: 'Facebook',
      url: 'https://facebook.com/',
      img: facebookImg,
      category: 'some'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/',
      img: youtubeImg,
      category: 'some'
    },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/',
      img: redditImg,
      category: 'some'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/?hl=fi',
      img: instagramImg,
      category: 'some'
    },
    {
      name: 'WhatsApp',
      url: 'https://web.whatsapp.com/',
      img: whatsappImg,
      category: 'some'
    },
    {
      name: 'Telegram',
      url: 'https://web.telegram.org/',
      img: telegramImg,
      category: 'some'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      img: twitterImg,
      category: 'some'
    },
    {
      name: 'Pintrest',
      url: 'https://fi.pinterest.com/',
      img: pintrestImg,
      category: 'some'
    },
    {
      name: 'Suomi24',
      url: 'https://www.suomi24.fi/',
      img: s24Img,
      category: 'some'
    },
    {
      name: 'Vauva',
      url: 'https://www.vauva.fi/',
      img: vauvaImg,
      category: 'some'
    },

    ///// ONLINE TV /////
    {
      name: 'Telkku',
      url: 'https://www.telkku.com/',
      img: telkkuImg,
      category: 'tv'
    },
    {
      name: 'Yle Areena',
      url: 'https://areena.yle.fi/tv',
      img: areenaImg,
      category: 'tv'
    },
    {
      name: 'MTV',
      url: 'https://www.mtv.fi/',
      img: mtvImg,
      category: 'tv'
    },
    {
      name: 'Ruutu',
      url: 'https://www.ruutu.fi/kanavat',
      img: ruutuImg,
      category: 'tv'
    },

    ///// SHOPPING /////
    {
      name: 'Tori',
      url: 'https://www.tori.fi/',
      img: toriImg,
      category: 'shopping'
    },
    {
      name: 'Etuovi',
      url: 'https://www.etuovi.com/',
      img: etuoviImg,
      category: 'shopping'
    },
    {
      name: 'Oikotie',
      url: 'https://www.oikotie.fi/',
      img: oikotieImg,
      category: 'shopping'
    },
    {
      name: 'Nettiauto',
      url: 'https://www.nettiauto.com/',
      img: nettiautoImg,
      category: 'shopping'
    },
    {
      name: 'Rantapallo',
      url: 'https://www.rantapallo.fi/',
      img: rantapalloImg,
      category: 'shopping'
    },
    {
      name: 'Ebay',
      url: 'https://www.ebay.com/',
      img: ebayImg,
      category: 'shopping'
    },
    {
      name: 'AliExpress',
      url: 'https://www.aliexpress.com/',
      img: aliexpressImg,
      category: 'shopping'
    }
  ]);

  return (
    <LinkContext.Provider value={[links, setLinks]}>
      {props.children}
    </LinkContext.Provider>
  );
};
