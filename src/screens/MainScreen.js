import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Dimensions, EventEmitter, FlatList, Image, StyleSheet, View } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../../theme'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'
import { AppLoader } from '../components/ui/AppLoader'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import AntDesign from 'react-native-vector-icons/AntDesign'


export const MainScreen = () => {

  const {todos, addTodo, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
  const {changeScreen} = useContext(ScreenContext)

  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2,
  )

  // const loadTodos = useCallback( async () => await fetchTodos() , [fetchTodos])

  useEffect(() => {
    // loadTodos()
    fetchTodos()
  }, [])

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
      setDeviceWidth(width)
    }
    const subscription = Dimensions.addEventListener('change', update)
    return () => {
      // Dimensions.removeEventListener('change', update)//????
      subscription.remove()
    }
  })

  if (loading) {
    return <AppLoader/>
  }
  if (error) {
    return <View style={styles.center}>
      <AppText style={styles.error}>
        {error}
      </AppText>
      <AppButton color='white' onPress={fetchTodos}>
      <AntDesign name='reload1' size={30} color={THEME.MAIN_COLOR}/>
      </AppButton>
    </View>
  }

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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    fontSize: 25,
    color: THEME.DANGER_COLOR
  }

})
