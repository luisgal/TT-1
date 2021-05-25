import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

class CabeceraPage extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={{alignItems: 'center'}}>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}

class Cabecera extends Component {
  render() {
    return (
      <Header>
        <Left/>
        <Body>
          <Title>Header</Title>
        </Body>
      </Header>
    );
  }
}

export {Cabecera, CabeceraPage};