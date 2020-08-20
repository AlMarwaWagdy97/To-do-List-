import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ item , presssHandler }){
    return(
        <TouchableOpacity onPress={() => presssHandler(item.key)}> 
            <View style={styles.viewitem}>
                <MaterialIcons name='delete' size={18}/>
            <Text style = {styles.textlist}> { item.text }</Text>    
            </View>
            
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    viewitem: {
        padding: 16, 
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10, 
        flexDirection:'row',
    },
    textlist:{
        marginLeft:10,
    }
    
})