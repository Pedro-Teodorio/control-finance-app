import React from 'react';
import { Button, Text, View } from 'react-native';
import * as SecureStore from "expo-secure-store";


export default function Home() {
  async function sair(){
    await SecureStore.deleteItemAsync('authToken')
    console.log("Removido o token")
  }
  return (
    <View>
        <Text>Hello Home</Text>
        <Button title='Sair' onPress={sair}/>
    </View>
  );
}
