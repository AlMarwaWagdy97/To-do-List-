// AddTodo
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';

export default function AddTodo({ AddToData }){

    const [NewItem, AddNewItem] = useState('');
    const Add_new_item = (val) =>{
        AddNewItem(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder = 'Add new todo...'
                onChangeText = {Add_new_item}
            />
            <Button onPress={()=> AddToData(NewItem)} title='Add todo' color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});