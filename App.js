import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{
        uri:'https://image.freepik.com/free-vector/red-blue-element-design-abstract-modern-background-with-hexagon-diagonal_64718-427.jpg'
      }} 
       style={{width:'100%',height:'100%', justifyContent:'center',alignItems:'center'}} 
       resizeMode="contain"
       >
      <Text style={{color:"#fff"}}>this is Web App</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
