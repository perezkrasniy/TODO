import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({addHandler}) {
  const [text, setValue] = useState('');
  
  const onChange = (text) => {
      setValue(text);
  };

  return (
    <View>
      <TextInput style = {styles.Input} onChangeText ={onChange} placeholder='Write message' />
      <Button color = 'green' onPress={() => addHandler(text)} title = 'Добавить задачу'/>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
  }
});
