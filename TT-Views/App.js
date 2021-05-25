//Libraries essentials
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

//Components from React Native
import { StyleSheet, View } from 'react-native';

//Screens
import Home from './components/Home';
import SelectImage from './components/ImagePicker';
import TakePicture from './components/TakePicture';

export default function App() {
const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if(!fontsLoaded){
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setFontsLoaded(true);
  }

  if(!fontsLoaded){
    return <View />;
  }

  return (
    <TakePicture />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
