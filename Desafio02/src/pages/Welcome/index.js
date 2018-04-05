import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  AsyncStorage,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import api from 'services/api';
import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  state = {
    username: '',
    error: false,
    loading: false,
  }

  checkAndSaveUser = async () => {
    const response = await api.get(`/users/${this.state.username}`);

    if (!response.ok) throw Error();

    await AsyncStorage.setItem('@Git:username', this.state.username);
  };

  submitUser = () => {
    if (this.state.username.length === 0) return;
    this.setState({ loading: true, error: false });

    this.checkAndSaveUser()
      .then(() => {
        const { dispatch } = this.props.navigation;

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });

        dispatch(resetAction);
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcomeTitle}>Bem Vindo</Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, precisamos que voce informe seu login no gitHub
        </Text>
        { this.state.error && <Text style={styles.error}>Esse usuário não existe.</Text> }

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite seu usuario"
          onChangeText={username => this.setState({ username })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submitUser}
        >
          { this.state.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : <Text style={styles.buttonText}>Prosseguir</Text> }
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
