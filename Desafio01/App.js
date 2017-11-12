/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Posts from './components/Posts';
import AppBar from './components/AppBar';

import './config/ReactotronConfig';


const posts = [
  {
    id: 0,
    title: 'Aprenda React Native',
    autor: 'Diego Schell Fernandes',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },

  {
    id: 1,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },
  {
    id: 2,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },
  {
    id: 3,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },

  {
    id: 4,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },

  {
    id: 5,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },

  {
    id: 6,
    title: 'Aprenda React',
    autor: 'Carinha',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
  },

];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});


class App extends React.Component {
  state = {
    posts,
  }
  render() {
    return (
      <View style={styles.container}>
        <AppBar text="GoNative App" />
        <Posts posts={this.state.posts} />
      </View>
    );
  }
}

export default App;
