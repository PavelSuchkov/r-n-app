/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

const App = () => {

  const [todos, setTodos] = useState([{ id: 1, title: 'tetsttss' }])
  const [todId, setTodId] = useState(null)

  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now().toString(), title }, ...prev],
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter(td => td.id !== id));
  };

  let content =  <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />

  if (todId) {
    content = <TodoScreen/>
  }

  return (
    <View>
      <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        { content }
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
