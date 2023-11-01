import { StatusBar } from 'expo-status-bar';
import React ,{useReducer}from 'react';
import { View } from 'react-native';

import List from './component/List';
import Input from './component/Input';
import Title from './component/Title';
import { actionCreators, reducer, initialState } from './component/todos';

export default function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <View>
      <Title>To-Do List</Title>
    <Input
    placeholder={'Type a todo, then hit enter!'}
    onSubmitEditting={(title) => dispatch(actionCreators.add(title))}/> 
    <List
    items={state.items}
    onPressItem={(id) => dispatch(actionCreators.remove((id)))}
    />
    </View>

  );
}

