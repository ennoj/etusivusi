import React, { useContext } from 'react';
import UserLink from '../components/UserLink';

import Container from '@material-ui/core/Container';

const UserLinks = ({ allLinks, deleteLink }) => {
	return (
		<Container maxWidth="sm">
			{allLinks.map((link) => (
				<UserLink deleteLink={deleteLink} name={link.name} url={link._id} key={link.name} />
			))}
		</Container>
	);
};

export default UserLinks;
