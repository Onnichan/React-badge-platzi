import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Pages */
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NofFound';

/** Components */
import Layout from '../components/Layout';

function App (){

  return (
    <BrowserRouter> 
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges}></Route> 
          <Route exact path="/badges/new" component={BadgeNew}></Route> 
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App