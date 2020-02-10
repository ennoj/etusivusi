import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles((theme) => ({
	chip: {
		margin: '10px 5px'
	}
}));

const UserLink = ({ name, url, deleteLink }) => {
	const classes = useStyles();

	return (
		<Chip
			className={classes.chip}
			color="primary"
			icon={<LinkIcon />}
			label={name}
			component="a"
			href={url}
			target="_blank"
			onDelete={deleteLink}
			clickable
		/>
	);
};

export default UserLink;
