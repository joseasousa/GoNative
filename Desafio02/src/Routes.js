import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Welcome from 'pages/Welcome';
import Repositories from 'pages/Repositories';
import Organizations from 'pages/Organizations';

import Header from 'components/Header';

const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: colors.white,
          inactiveTintColor: colors.inactive,
          style: {
            backgroundColor: colors.primary,
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
