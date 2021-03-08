import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button_white: {
    color: 'white',
  },
  custom_link: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(false);

  const handleToggleDialog = () => {
    setToggle(!toggle);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HomeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button className={classNames(classes.button_white)}>
            <NavLink className={classNames(classes.custom_link)} to="/todos">
              Todos
            </NavLink>
          </Button>
          <Button className={classNames(classes.button_white)}>
            <NavLink className={classNames(classes.custom_link)} to="/albums">
              Albums
            </NavLink>
          </Button>
          <Button onClick={handleToggleDialog} className={classes.button_white}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={toggle}
        onClose={handleToggleDialog}
        disableEscapeKeyDown
        disableBackdropClick
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
