import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'
import { ScreenState } from './src/context/screen/ScreenState'


const App = () => {

  useEffect(() => {
    (Platform.OS === 'android') &&
    SplashScreen.hide()
  }, [])

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  )
}


export default App
