import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {getUserInfo} from '../services/FetchUser';

export default class SearchComponent extends Component {
  state = {
    username: '',
    error: '',
    res: '',
  };

  handleSubmit = async () => {
    getUserInfo(this.state.username)
      .then(response => {
        console.log(response.data);
        Actions.userInfo({
          user: response.data,
          title: response.data.name || 'No title',
        });
      })
      .catch(error => {
        this.setState({error: 'User is not found'});
        console.log(error.message);
      });
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Search For Github User</Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={username => this.setState({username})}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={() => this.handleSubmit()}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableHighlight>
        <Text>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
