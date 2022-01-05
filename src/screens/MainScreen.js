import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../../theme'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'


export const MainScreen = () => {

  const {todos, addTodo, removeTodo} = useContext(TodoContext)
  const {changeScreen} = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2,
  )

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
      setDeviceWidth(width)
    }
    Dimensions.addEventListener('change', update)
    return () => {
      Dimensions.removeEventListener('change', update)   //????
    }
  })


  let content = <View style={{ deviceWidth }}>
    <FlatList data={todos}
              renderItem={({ item }) => (
                <Todo
                  todo={item}
                  key={item.id}
                  onRemove={removeTodo}
                  onOpen={changeScreen} />)} />
  </View>

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={require('../assets/no_items.png')} />
      </View>
    )
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50,
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})
