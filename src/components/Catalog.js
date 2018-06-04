import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { history } from '../store/index';
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
createDataTree = (rawData) => {
  const hashTable = Object.create(null);
  rawData.forEach(aData => hashTable[aData.id] = { ...aData, childNodes: [] });
  const dataTree = [];
  rawData.forEach(aData => {
    if (aData.parent_id) hashTable[aData.parent_id].childNodes.push(hashTable[aData.id]);
    else dataTree.push(hashTable[aData.id]);
  });
  return dataTree;
}

loadCatalog = () => fetch(`${CORS_API_URL + API_URL}/categories`, {
  headers: {
    Authorization: `Basic ${btoa(`${history.location.state.login}:${history.location.state.password}`)}`,
  }

}).then((resp) => resp.json())
  .then((data) => {
    const rawData = data.data.categories;
    return rawData;
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
  });


render() {
  console.log(this.loadCatalog());
  return (
    <div> Katalok</div>
  );
}
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(withStyles(materialStyles)(Catalog));
