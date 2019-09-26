import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import SearchComponent from './src/components/SearchComponent';
import userInfoComponent from './src/components/UserInfoComponent';
import {Scene, Stack, Router} from 'react-native-router-flux';
export default class APP extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="search" component={SearchComponent} title="Search User" />
          <Scene key="userInfo" component={userInfoComponent} title="User" />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    // backgroundColor: '#111111',
    textAlign: 'center',
    marginTop: 20,
  },
});
