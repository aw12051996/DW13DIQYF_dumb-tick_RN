import React, {Component} from 'react';
import {Header, Right, Button, Icon, Left, Body, Title} from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Dumb-Tick</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
