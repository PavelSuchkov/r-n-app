import React, { useState } from 'react'
import { Button, View, StyleSheet, TextInput, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { THEME } from '../../theme'
import { TaskCard } from '../components/ui/TaskCard'
import { EditModal } from '../components/EditModal'


export const TodoScreen = ({ todo, goBack, removeTodo, onSave }) => {

  const [isVisible, setIsVisible] = useState(false)

  const saveHandler = (title) => {
    onSave(todo.id, title)
    setIsVisible(false)
  }

  return <View>
    <TaskCard style={styles.card}>
      <Text style={styles.title}>{todo.title}</Text>
      <Button title="Edit" onPress={() => setIsVisible(true)}/>
    </TaskCard>
    <View style={styles.buttonBlock}>
      <View style={styles.button}>
        <Button title="Back"
                color={THEME.GRAY_COLOR}
                onPress={() => {goBack()}} />
      </View>
      <View style={styles.button}>
        <Button title="Delete "
                color={THEME.DANGER_COLOR}
                onPress={() => {removeTodo(todo.id)}} />
      </View>
    </View>
    <EditModal value={todo.title}
               visible={isVisible}
               onSave={saveHandler}
               onCancel={() => setIsVisible(false)} />
  </View>
}

const styles = StyleSheet.create({
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 24,
    fontFamily: THEME.FONTS.ITALIC,
    // fontWeight: '700'
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
})
