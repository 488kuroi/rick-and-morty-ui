import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '@features/drawer/drawer.slice';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
	Drawer,
	IconButton,
} from '@material-ui/core';

import { MenuOutlined } from '@mui/icons-material';

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	paper: {
		backgroundColor: 'transparent!important',
		border: 'none',
		'&:before': {
			content: '""',
			position: 'absolute',
			height: '100%',
			width: '1px',
			boxShadow: '-18px -60vh 154px 17px #FFF',
		}
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		}
		
	},
	drawerContent: {
		padding: theme.spacing(2, 0, 0, 2),
	}
}));


function DrawerContentSettings() {

	const classes = useStyles();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={`Drawer`}>
			<Drawer
				anchor={`right`}
				variant="permanent"
				onClose={() => dispatch(toggleDrawer(isOpen))}
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: isOpen,
					[classes.drawerClose]: !isOpen,
				})}
				classes={{
					paper: clsx(classes.paper, {
						[classes.drawerOpen]: isOpen,
						[classes.drawerClose]: !isOpen,
					}),
				}}
			>

				<div className={classes.drawerContent}>
					<IconButton onClick={() => setIsOpen(!isOpen)}>
						<MenuOutlined />
					</IconButton>
				</div>

			</Drawer>
		</div>
	)

}

export default DrawerContentSettings;

