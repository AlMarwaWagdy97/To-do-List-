import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableWithoutFeedback, Keyboard ,Text, Button, Alert,TextInput, ScrollView, TouchableOpacity, ProgressViewIOSComponent} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

let count = 3;
export default function App() {
 
  const [todos, setTodo] = useState ([
    {text: 'gym' , key: '1'},
    {text: 'swimming' , key: '2'},
    {text: 'Reading' , key: '3'}
  ]);

  const presssHandler = (key) => {
    setTodo( (prevtodo) => {
      return prevtodo.filter(notfinish => notfinish.key != key)
    });
  }
  
  const AddToData = (val) => {
    if(val.length >= 3){
      count+= 1;
      setTodo( (prevData) => {
        return[
          ...prevData,
          {text:val, key:count.toString()}
        ];
      });
    }
   else{
     alert('OOOPS!\nTodo must be over char 3 long');
    //  Alert.alert('OOOPS! \n Todo must be over char 3 long',[
    //    {text:'Understood', onPress: () => console.log('alert closed') }
    //   ]);
   }
  }

  return (
    <TouchableWithoutFeedback 
      // onPress={()=> Keyboard.dismiss()}
      >
      <View style={styles.containers}>
        {/* <Sandbox/> */}
        <Header/>
        <View style={styles.contain}>
          {/* form */}
          <AddTodo AddToData={AddToData}/>
          <View style={styles.list}>
            <FlatList
                data = {todos}
                renderItem={( {item} ) => ( <TodoItem item={item} presssHandler ={presssHandler} /> )}
            />
              
          </View>
        </View>   
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contain:{
    padding:40,
    flex: 1,
  },
  list:{
    marginTop:20,
  },
 
  
});
