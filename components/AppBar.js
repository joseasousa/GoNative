import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = ({ text }) => (
  <View style={style.bar} >
    <Text style={style.title}>{text}</Text>
  </View>
);

const style = StyleSheet.create({
  bar: {
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default AppBar;

