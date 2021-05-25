import React, { Component } from 'react';
import { Cabecera } from './Cabecera';
import { Button, Container, Content, H1, Icon, Text, View } from 'native-base';

class Home extends Component {
    render() {
        return(
            <Container>
                <Cabecera/>
                <Content>
                <H1>TT 2020-B054</H1>
                <Button>
                    <Text>Tomar foto</Text>
                </Button>
                <Icon type="FontAwesome5" name="camera-retro" />
                <Button>
                    <Text>Seleccionar foto</Text>
                </Button>
                <Icon type="FontAwesome5" name="folder" />
                </Content>
                <Content>
                <View>
                    <Icon type="FontAwesome5" name="folder-open" />
                    <Text>Expedientes</Text>
                </View>
                <View>
                    <Icon type="FontAwesome" name="gear" />
                    <Text>configuración</Text>
                </View>
                </Content>
            </Container>
        );
    }
}

export default Home;