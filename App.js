/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
     setTodos((prev) => [ {id: Date.now().toString(), title}, ...prev]
    )
  }

  return (
    <View>
        <Navbar title="List of todo&rsquo;s " />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {
            todos.map(td => <Todo todo={td} key={td.id}/>)
          }
        </View>
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
