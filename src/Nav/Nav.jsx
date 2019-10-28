import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import c from './Nav.module.scss';
import { NavLink} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	input: {
		display: 'none',
	},
}));

export default function Nav() {
	const classes = useStyles();
	return (
		<header className={c.header}>
				<NavLink to='/converter'>
					<Button variant="contained" color="primary" className={classes.button}>
						Currency converter
				</Button>
				</NavLink>

				<NavLink to='/'>
					<Button variant="contained" color="primary" className={classes.button}>
						Currency list
				</Button>
				</NavLink>
		</header>

	);
};