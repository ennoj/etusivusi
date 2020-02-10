import React, { useState, useContext } from 'react';
import { LinkContext } from '../context/LinkContext';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1.3)
	}
}));

const emptyFields = {
	name: '',
	url: 'http://'
};

const AddLink = ({ addLink }) => {
	const classes = useStyles();
	const [ newLink, setNewLink ] = useState(emptyFields);

	const { name, url } = newLink;

	const onChange = (e) => {
		setNewLink({ ...newLink, [e.target.name]: e.target.value });
	};

	const linkSubmit = (e) => {
		e.preventDefault();
		if (name.length < 3 || url.length < 3) {
			alert('Täytä vaaditut kentät');
		} else {
			addLink(newLink);
			setNewLink(emptyFields);
		}
	};

	return (
		<form onSubmit={linkSubmit}>
			<TextField
				required
				type="text"
				name="name"
				value={name}
				onChange={onChange}
				id="outlined-required"
				label="Nimi"
				margin="dense"
				variant="outlined"
			/>

			<TextField
				required
				type="text"
				name="url"
				value={url}
				onChange={onChange}
				id="outlined-required"
				label="Osoite (URL)"
				margin="dense"
				variant="outlined"
			/>
			<Button className={classes.button} color="primary" type="submit" variant="outlined">
				Lisää
			</Button>
		</form>
	);
};

export default AddLink;
