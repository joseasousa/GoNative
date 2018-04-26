import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <View style={style.postContainer}>
    <Text style={style.title} >{post.title}</Text>
    <Text style={style.autor} >{post.autor}</Text>
    <Text style={style.description} >{post.description}</Text>
  </View>
);


PropTypes.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    autor: PropTypes.string,
  }).isRequired,
};

Post.defaultProps = {
  poste: {
    title: 'Titulo',
    description: ':)',
  },
};

const style = StyleSheet.create({
  postContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderStyle: 'solid',
    borderRadius: 4,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 100,
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    borderColor: '#EEE',
    borderTopWidth: 1,
  },
  autor: {
    fontSize: 14,
    color: '#999',

  },
});


export default Post;
