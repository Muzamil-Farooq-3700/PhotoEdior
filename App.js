import { View, Text, LogBox } from 'react-native'
import React from 'react'
import RootNavigations from './src/navigations/rootNavigations/rootNavigations'
import { SafeAreaView } from 'react-native-safe-area-context'
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigations />
    </SafeAreaView>
  )
}

export default App