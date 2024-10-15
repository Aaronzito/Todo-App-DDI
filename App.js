// App.js
import React from 'react';
import { View } from 'react-native';
import TodoList from './components/TodoList';  // Asegúrate de que la ruta apunte correctamente a 'components/TodoList'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
}
