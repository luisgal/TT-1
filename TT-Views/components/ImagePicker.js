import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Container, Content, Button as BtnNB, Text } from 'native-base';
import { Button as BtnRN, Image, View } from 'react-native';
import { CabeceraPage } from './Cabecera';

export default function SelectImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
        <CabeceraPage title="Selecciona una imagen"/>
        <Content>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <BtnRN title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </Content>
        <Content>
            <BtnNB>
                <Text>Seleccionar</Text>
            </BtnNB>
        </Content>
    </Container>
  );
}
