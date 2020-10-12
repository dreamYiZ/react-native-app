import React,{ useState, useEffect} from 'react';
import { StyleSheet, Alert } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>你好，世界！</Text>
      <Text style={styles.title} onPress={getGeo}> 获取当前位置</Text>
    </View>
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
