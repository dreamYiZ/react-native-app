import React,{ useState, useEffect} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { getRandomCatFace } from '../utils/api';

export default function TabOneScreen() {
  useEffect(() => {
    getRandomCatFace().then(res=>{
      console.log(res);
    })
    return () => {
    }
  }, [])

  useEffect(() => {
      
    return () => {
    }
  }, [])

  const getGeo=()=>{
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        console.log('location', location);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  return (
    <ScrollView>
      <Text>Some text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
      <Text>Some more text</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
