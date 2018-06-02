import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store/index';
import Layout from 'containers/layout';
import App from 'containers/app';
import CatalogPage from 'containers/CatalogPage';


const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/catalog" component={CatalogPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default routes;
