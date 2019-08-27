import React, { useState, createContext } from 'react';

export const LinkContext = createContext();

export const LinkProvider = props => {
  const [links, setLinks] = useState([
    {
      name: 'Google',
      url: 'https://www.google.com',
      id: 1
    },

    {
      name: 'Reddit',
      url: 'https://www.reddit.com',
      id: 2
    },

    {
      name: 'Youtube',
      url: 'https://www.youtube.com',
      id: 3
    }
  ]);

  return (
    <LinkContext.Provider value={[links, setLinks]}>
      {props.children}
    </LinkContext.Provider>
  );
};
