import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { API_URL,
  CORS_API_URL } from 'constants/action-types';

// material ui styles
const materialStyles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

export class Catalog extends React.Component {
  loadCatalog = () => fetch(`${CORS_API_URL + API_URL}/categories`).then(response => response.json());
  render() {
    console.log(this.props);
    return (
      <div> Katalok</div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  login: state.login,
});

export default connect(mapDispatchToProps, { })(withStyles(materialStyles)(Catalog));
