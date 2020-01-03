import React, {Component} from 'react';
import {View, Header, Item, Input, Icon, Button, Text} from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
    );
  }
}
