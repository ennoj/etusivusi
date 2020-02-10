import React from 'react';

import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const UserLink = ({ link, name, url, deleteLink }) => {
	return (
		<a style={{ color: '#333', textDecoration: 'none' }} href={url} target="_blank">
			<ListItem button>
				<LinkIcon style={{ color: '#666', marginRight: '10px' }} />
				<ListItemText primary={name} />
				<DeleteIcon
					style={{ color: 'darkred' }}
					onClick={(e) => {
						e.preventDefault();
						deleteLink(link);
					}}
				/>
			</ListItem>
			<Divider />
		</a>
	);
};

export default UserLink;

// <Chip
// 	className={classes.chip}
// 	color="primary"
// 	icon={<LinkIcon />}
// 	label={name}
// 	target="_blank"
// 	onDelete={() => deleteLink(link)}
// 	onClick={(e) => handleClick(e)}
// />;
