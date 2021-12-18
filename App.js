/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, title: 'tetsttss' },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now().toString(), title }, ...prev],
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter( td => td.id !== id) )
  }

  return (
    <View>
      <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList data={todos}
                  renderItem={({ item }) => (
                    <Todo todo={item} key={item.id}
                          onRemove={removeTodo}/>)} />
    {/*    <ScrollView>
          {
            todos.map(td => <Todo todo={td} key={td.id} />)
          }
        </ScrollView>*/}
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
