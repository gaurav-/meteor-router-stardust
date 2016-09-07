import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { ApolloProvider } from 'react-apollo';
import Routes from '../imports/client/routes';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface= createNetworkInterface(
    'http://172.16.7.9:4000/graphql',
    {
      credentials:'same-origin',
    }
);

const client= new ApolloClient({ networkInterface });

Meteor.startup(() => {

  ReactDOM.render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app')
  );

});
