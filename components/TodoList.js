import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { styles } from './style';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { key: task }]);
      setTask('');
    }
  };

  const deleteTask = (key) => {
    setTasks(tasks.filter(item => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task's name"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.task} onPress={() => deleteTask(item.key)}>
            <Text>{item.key}</Text>
          </TouchableOpacity>
        )}/>
    </View>
  );
};

export default TodoList;
