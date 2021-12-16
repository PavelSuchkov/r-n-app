/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

const App = () => {
  return (
    <View>
        <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
};
console.log('lkd;lskf;lks');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
