import React from 'react';
import UserLink from '../components/UserLink';

import List from '@material-ui/core/List';

const UserLinks = ({ allLinks, deleteLink }) => {
  return (
    <List component='nav' aria-label='mailbox folders'>
      {allLinks.map(link => (
        <UserLink
          link={link}
          deleteLink={deleteLink}
          name={link.name}
          url={link.url}
          key={link._id}
        />
      ))}
    </List>
  );
};

export default UserLinks;
