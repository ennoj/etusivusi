import React, { useContext } from 'react';
import UserLink from '../components/UserLink';

import Container from '@material-ui/core/Container';

import { LinkContext } from '../context/LinkContext';

const UserLinks = () => {
  const [links] = useContext(LinkContext);

  return (
    <Container maxWidth='sm'>
      {links.map(link => {
        if (link.category === 'user') {
          return <UserLink name={link.name} url={link.url} key={link.name} />;
        } else {
          return null;
        }
      })}
    </Container>
  );
};

export default UserLinks;
