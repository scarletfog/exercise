import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpen from '@material-ui/icons/LockOpen';
import Fingerprint from '@material-ui/icons/Fingerprint';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { loginAction } from '../actions/login';
// css module styles
import styles from './LoginForm.css';

// material ui styles
const materialStyles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

export class LoginForm extends React.Component<Props> {
  constructor(props) {
    super();
    this.state = {
      password: '',
      login: '',
    };
  }
 handleChange = prop => event => {
   this.setState({ [prop]: event.target.value });
 };

 render() {
   const { classes, loginAction } = this.props;
   const { login, password } = this.state;
   return (
     <div>
       <Paper className={styles.loginWrapper} style={{ background: blue[300] }}>
         <FormControl className={classes.margin} style={{ color: grey[50] }}>
           <Grid container spacing={16} alignItems="flex-end">
             <Grid item>
               <AccountCircle />
             </Grid>
             <Grid item>
               <TextField id="input-with-icon-grid" label="Login" value={login}onChange={this.handleChange('login')} />
             </Grid>
           </Grid>
         </FormControl>
         <FormControl className={classes.margin} style={{ color: grey[50] }}>
           <Grid container spacing={16} alignItems="flex-end">
             <Grid item>
               <Fingerprint />
             </Grid>
             <Grid item>
               <TextField id="input-with-icon-grid" label="Password" value={password} onChange={this.handleChange('password')} />
             </Grid>
           </Grid>
         </FormControl>
         <Button
           className={styles.loginButton}
           onClick={() => {
             loginAction(login, password)
               .then(success => {
                 if (success) {
                   console.log(this.props);
                 }
               });
           }}
           variant="raised"
           style={{ background: blue[900], color: grey[50] }}
         >
           Login
           <LockOpen />
         </Button>
       </Paper>
     </div>
   );
 }
}
LoginForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

const mapDispatchToProps = (state) => ({
  login: state.login,
});

export default connect(mapDispatchToProps, { loginAction })(withStyles(materialStyles)(LoginForm));
