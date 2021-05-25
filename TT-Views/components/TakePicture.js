import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Button, Container, Content, Icon, View } from 'native-base';
import { CabeceraPage } from './Cabecera';

export default function TakePicture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  let camera;

  const takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync({quality: 1})
      .then(photo => {
        console.log('data', photo)
        const asset = MediaLibrary.createAssetAsync(photo.uri);
      })
      .catch(error => console.log('eror', error));
    console.log('Exiting takePicture()');

  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      const { statusM } = await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container>
      <CabeceraPage title="Toma una foto"/>
        <View style={styles.container}>
          <Camera style={styles.camera} type={type} ratio={"1:1"}
            ref={ref => {
              camera = ref;
            }}>
          </Camera>
          <Content> 
              <Button
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Icon active type="Entypo" name="retweet"/>
              </Button>
              
              <Button onPress={takePicture}>
                <Icon active type="AntDesign" name="checkcircle"/>
              </Button>
            </Content>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});