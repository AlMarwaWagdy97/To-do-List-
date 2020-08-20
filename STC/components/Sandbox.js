// AddTodo
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';

export default function Sandbox(){
    return(
        <View style = {styles.Contaner}>
            <Text style={styles.box1}>Box1</Text>
            <Text style={styles.box2}>Box2</Text>
            <Text style={styles.box3}>Box3</Text>
            <Text style={styles.box4}>Box4</Text>
        </View>
        
    )
    
}
const styles = StyleSheet.create({
    Contaner:{
        // padding:40,
        backgroundColor:'#ddd',
        // alignItems:'flex-end',
        // flexDirection:'row',
        // justifyContent:'space-around',
    },
    box1:{
        backgroundColor:'violet',
        padding: 10,
    },
    box2:{
        backgroundColor:'gold',
        padding: 10,
    },
    box3:{
        backgroundColor:'coral',
        padding: 10,
    },
    box4:{
        backgroundColor:'skyblue',
        padding: 10,
    },
});