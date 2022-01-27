import React from "react";
import CollectionOverview from '../../components/collection-overview/collection-overview'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.jsx'

const Shoppage = ({match}) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};



export default Shoppage;
