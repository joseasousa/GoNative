import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Post from './Post';

const Posts = ({ posts }) => (
  <ScrollView style={style.postContainer}>
    {posts.map(post =>
      <Post key={post.id} post={post} /> )}
  </ScrollView>
);


Post.defaultProps = {
  poste: {
    title: 'Titulo',
    description: ':)',
  },
};

const style = StyleSheet.create({
  postContainer: {
    flex: 8,
    marginLeft: 20,
    marginRight: 20,
  },
});


export default Posts;
