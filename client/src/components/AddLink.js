import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	button: {
		width: '100%',
		margin: '20px 0'
	},
	field: {
		width: '100%',
		margin: '6px 0'
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
		if (name.length < 3 || url.length < 10) {
			alert('Täytä vaaditut kentät');
		} else {
			addLink(newLink);
			setNewLink(emptyFields);
		}
	};

	return (
		<form onSubmit={linkSubmit}>
			<TextField
				className={classes.field}
				required
				type="text"
				name="name"
				value={name}
				onChange={onChange}
				label="Nimi (Maks. 30 merkkiä)"
				margin="dense"
				variant="outlined"
			/>

			<TextField
				className={classes.field}
				required
				type="text"
				name="url"
				value={url}
				onChange={onChange}
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
