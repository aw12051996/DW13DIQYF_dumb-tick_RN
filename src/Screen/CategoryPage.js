import React from 'react';
import {Container, Content, Text} from 'native-base';
import {FlatList} from 'react-native';
import axios from 'axios';

import HeaderApp from './../Components/Header';
import ListEventApp from './../Components/ListEvent';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      category: [],
    };
  }

  handlePressEvent = id => () => {
    this.props.navigation.navigate('DetailEvent', {
      itemId: id,
    });
  };

  componentDidMount() {
    const {navigation} = this.props;
    const id = JSON.stringify(navigation.getParam('itemId'));
    console.log(id);
    axios
      .get(`http://192.168.1.7:5000/api/v1/category/${id}/events`)
      .then(res => {
        this.setState({
          events: res.data.events,
          category: res.data,
        });
      })
      .catch(err => {
        alert(err);
      });
    console.log(this.state.events);
  }
  render() {
    return (
      <Container>
        <HeaderApp />
        <Content padder>
          <Text>{this.state.category.name}</Text>
          <FlatList
            // horizontal
            data={this.state.events}
            renderItem={({item}) => (
              <ListEventApp
                getId={this.handlePressEvent(item.id)}
                title={item.title}
                date={item.start_time}
                price={item.price}
                image={item.image}
              />
            )}
            keyExtractor={item => item.id}
          />
        </Content>
      </Container>
    );
  }
}
