import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Clock from '../components/Clock';

const useStyles = makeStyles({
	root: {
		padding: '0',
		margin: '0',
		height: '100vh',
		width: '100%',
		color: '#dedede',
		background:
			'linear-gradient(55deg, rgba(40, 40, 40, 0.09) 0%, rgba(40, 40, 40, 0.09) 50%,rgba(186, 186, 186, 0.09) 50%, rgba(186, 186, 186, 0.09) 100%),linear-gradient(116deg, rgba(156, 156, 156, 0.07) 0%, rgba(156, 156, 156, 0.07) 50%,rgba(77, 77, 77, 0.07) 50%, rgba(77, 77, 77, 0.07) 100%),linear-gradient(57deg, rgba(73, 73, 73, 0.07) 0%, rgba(73, 73, 73, 0.07) 50%,rgba(44, 44, 44, 0.07) 50%, rgba(44, 44, 44, 0.07) 100%),linear-gradient(103deg, rgba(187, 187, 187, 0.1) 0%, rgba(187, 187, 187, 0.1) 50%,rgba(10, 10, 10, 0.1) 50%, rgba(10, 10, 10, 0.1) 100%),linear-gradient(42deg, rgba(200, 200, 200, 0.08) 0%, rgba(200, 200, 200, 0.08) 50%,rgba(58, 58, 58, 0.08) 50%, rgba(58, 58, 58, 0.08) 100%),linear-gradient(211deg, rgba(160, 160, 160, 0.1) 0%, rgba(160, 160, 160, 0.1) 50%,rgba(73, 73, 73, 0.1) 50%, rgba(73, 73, 73, 0.1) 100%),linear-gradient(48deg, rgba(7, 7, 7, 0.09) 0%, rgba(7, 7, 7, 0.09) 50%,rgba(69, 69, 69, 0.09) 50%, rgba(69, 69, 69, 0.09) 100%),linear-gradient(15deg, rgba(172, 172, 172, 0.07) 0%, rgba(172, 172, 172, 0.07) 50%,rgba(105, 105, 105, 0.07) 50%, rgba(105, 105, 105, 0.07) 100%),linear-gradient(154deg, rgba(220, 220, 220, 0.02) 0%, rgba(220, 220, 220, 0.02) 50%,rgba(134, 134, 134, 0.02) 50%, rgba(134, 134, 134, 0.02) 100%),linear-gradient(90deg, rgb(64, 80, 215),rgb(13, 206, 230))'
	}
});

const Front = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.root} container direction="column" justify="center" alignItems="center">
			<Clock />
		</Grid>
	);
};

export default Front;
