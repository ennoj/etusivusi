import React, { useState, useContext, Fragment } from 'react';
import UserLink from '../components/UserLink';

import { LinkContext } from '../context/LinkContext';

const UserLinks = () => {
  const [links, setLinks] = useContext(LinkContext);

  return (
    <Fragment>
      {links.map(link => (
        <UserLink name={link.name} url={link.url} />
      ))}
    </Fragment>
  );
};

export default UserLinks;
