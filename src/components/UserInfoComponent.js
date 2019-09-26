import React, {Component} from 'react';

import {View, StyleSheet, Image} from 'react-native';

export default class userInfoComponent extends Component {
  render() {
    console.log(this.props, 'user props');
    const user = this.props.user;
    return (
      <View style={styles.container}>
        <Image source={{uri: user.avatar_url}} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
});
