import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { THEME } from '../../theme'
import { TaskCard } from '../components/ui/TaskCard'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'


export const TodoScreen = () => {

  const {todos, removeTodo, updateTodo} = useContext(TodoContext)
  const {todoId, changeScreen} = useContext(ScreenContext)

  const [isVisible, setIsVisible] = useState(false)

  const todo = todos.find(td => td.id === todoId)

  const saveHandler = async (title) => {
    await updateTodo(todo.id, title)
    setIsVisible(false)
  }

  return (
    <View>
    <TaskCard style={styles.card}>
      <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
      <AppButton title="Edit" onPress={() => setIsVisible(true)}>
        <FontAwesome name="edit" size={20} />
      </AppButton>
    </TaskCard>
    <View style={styles.buttonBlock}>
      <View style={styles.button}>
        <AppButton
          color={THEME.GRAY_COLOR}
          onPress={() => {changeScreen(null)}}>
          <AntDesign name='back' size={20} color='#fff'/>
        </AppButton>
      </View>
      <View style={styles.button}>
        <AppButton
          color={THEME.DANGER_COLOR}
          onPress={() => {removeTodo(todo.id)}}>
          <AntDesign name='delete' size={20}/>
        </AppButton>
      </View>
    </View>
    <EditModal value={todo.title}
               visible={isVisible}
               onSave={saveHandler}
               onCancel={() => setIsVisible(false)} />
  </View>)
}

const styles = StyleSheet.create({
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width * 0.3  ,
  },
  title: {
    fontSize: 24,
    // fontFamily: THEME.FONTS.NORMAL,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
})
