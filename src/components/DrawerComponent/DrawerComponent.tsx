import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { selectDrawer } from '@selectors'
import { ITheme } from '@themes';
import { makeStyles } from '@material-ui/core/styles';
import { useStyles as commonStyles } from '@pages'

import {
	Drawer,
	MenuList,
	MenuItem,
} from '@material-ui/core';

const drawerWidth = 250;

const useStyles = makeStyles((theme: ITheme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	paper: {
		backgroundColor: 'transparent!important',
		border: 'none',
		marginTop: theme.spacing(15),
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
		width: 0,
	},
	drawerContent: {
		padding: theme.spacing(25, 0, 0, 2),
	},
	menuItems: {
		textAlign: 'right',
		padding: theme.spacing(2.5, 5, 2.5, 5),
		'& a': {
			color: theme.link.color,
		}
	}
}));


interface DrawerComponentProps { }

const DrawerComponent: FC<DrawerComponentProps> = () => {

	const classes = useStyles();
	const commonClasses = commonStyles();
	const DRAWER = useSelector(selectDrawer);
	const { t } = useTranslation('common');
	const MENU: Array<any> = t('menu', { returnObjects: true });
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsOpen(DRAWER.isOpen);
	}, [DRAWER.isOpen] )


	return (
		<div data-testid="DrawerComponent" className={`Drawer`}>
			<Drawer
				variant='permanent'
				anchor={`right`}
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
					
					<MenuList>
						{
							MENU.map((item: any, item_i: number) => (
								<MenuItem key={`menu_item_${item_i}`} className={`${commonClasses.justEnd} ${classes.menuItems}`}>
									<Link to={ item.path} color="inherit">
										{item.label}
									</Link>
								</MenuItem>
							))
						}
					</MenuList>
				</div>

			</Drawer>
		</div>
	)

}

export default DrawerComponent;



