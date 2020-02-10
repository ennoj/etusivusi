import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fi';
import momentTz from 'moment-timezone';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

moment.locale('fi');

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment().format('HH:mm:ss'),
			date: moment().format('dddd, LL'),

			timeBkk: momentTz().tz('Asia/Bangkok').format('HH:mm:ss'),
			dateBkk: momentTz().tz('Asia/Bangkok').format('dddd, LL')
		};
	}

	componentDidMount() {
		this.everySecond = setInterval(() => {
			this.setState({
				time: moment().format('HH:mm:ss'),
				date: moment().format('dddd, LL'),

				timeBkk: momentTz().tz('Asia/Bangkok').format('HH:mm:ss'),
				dateBkk: momentTz().tz('Asia/Bangkok').format('dddd, LL')
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.everySecond);
	}

	render() {
		let time = this.state.time;
		let date = this.state.date;
		return (
			<Grid container direction="column" justify="center" alignItems="center">
				<Typography style={{ fontSize: '10rem' }} variant="h1">
					{time}
				</Typography>
				<Typography style={{ fontSize: '2rem' }} variant="h2">
					{date}
				</Typography>
			</Grid>
		);
	}
}
