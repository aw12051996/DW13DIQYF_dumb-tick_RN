import React from 'react';
import {FlatList} from 'react-native';
import {Button, Container, Content, Text} from 'native-base';
import axios from 'axios';
import HeaderApp from './../Components/Header';
// import SearchApp from './../Components/Search';
// import Category from './../Components/Category';
import ListEventApp from './../Components/ListEvent';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      categories: [],
    };
  }

  handlePress = id => () => {
    this.props.navigation.navigate('CategoryPage', {
      itemId: id,
    });
  };

  handlePressEvent = id => () => {
    this.props.navigation.navigate('DetailEvent', {
      itemId: id,
    });
  };

  componentDidMount() {
    axios
      .get('http://192.168.1.7:5000/api/v1/events')
      .then(res => {
        this.setState({
          events: res.data,
        });
      })
      .catch(err => {
        alert(err);
      });

    axios
      .get('http://192.168.1.7:5000/api/v1/categories')
      .then(res => {
        this.setState({
          categories: res.data,
        });
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    const today = this.state.events.filter(events => {
      const date = new Date(events.start_time);
      return (
        date.toISOString().substring(0, 10) ===
        new Date().toISOString().substring(0, 10)
      );
    });
    // tomorrow
    const upcoming = this.state.events.filter(events => {
      const date = new Date(events.start_time);
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      // console.log(tomorrow);
      return (
        date.toISOString().substring(0, 10) >=
        tomorrow.toISOString().substring(0, 10)
      );
    });
    return (
      <Container>
        <HeaderApp />
        <Content padder>
          <FlatList
            horizontal
            data={this.state.categories}
            renderItem={({item}) => (
              <Button info onPress={this.handlePress(item.id)}>
                <Text> {item.name} </Text>
              </Button>
            )}
            keyExtractor={item => item.id}
          />
          <Text>Today</Text>
          <FlatList
            horizontal
            data={today}
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
          <Text>Upcoming</Text>
          <FlatList
            horizontal
            data={upcoming}
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
